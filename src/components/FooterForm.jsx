import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import useLocalStorage from "../hooks/useLocalStorage"
import { ClipLoader } from "react-spinners"

const FooterForm = () => {
  const [FIO, setFIO] = useLocalStorage("FIO", "")
  const [PHONE, setPHONE] = useLocalStorage("PHONE", "")
  const [EMAIL, setEMAIL] = useLocalStorage("EMAIL", "")
  const [COMMENT, setCOMMENT] = useLocalStorage("COMMENT", "")
  const [LANGUAGES, setLANGUAGES] = useLocalStorage("LANGUAGES", [
    "JavaScript",
    "PHP",
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const allLanguages = ["JavaScript", "PHP", "Python", "Java", "C++", "Go"]

  const {
    register,
    handleSubmit,
    formState: { errors, setError },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      FIO,
      PHONE,
      EMAIL,
      COMMENT,
      agreement: true,
    },
  })

  useEffect(() => {
    const cookieLogin = document.cookie
      .split("; ")
      .find((row) => row.startsWith("login="))

    if (cookieLogin) {
      setIsLoggedIn(true)
      fetchUserData(cookieLogin.split("=")[1])
    }
  }, [])

  const fetchUserData = async (login) => {
    try {
      const response = await fetch(
        `/project/api/?login=${encodeURIComponent(login)}`,
        {
          method: "GET",
          headers: {
            Authorization: "Basic " + btoa(`${login}:password`),
          },
        }
      )

      if (!response.ok) throw new Error("Ошибка загрузки данных")

      const data = await response.json()

      if (data.success && data.user) {
        setValue("FIO", data.user.FIO || "")
        setValue("PHONE", data.user.PHONE || "")
        setValue("EMAIL", data.user.EMAIL || "")
        setValue("COMMENT", data.user.BIO || "")

        setFIO(data.user.FIO || "")
        setPHONE(data.user.PHONE || "")
        setEMAIL(data.user.EMAIL || "")
        setCOMMENT(data.user.BIO || "")
        setLANGUAGES(data.user.LANGUAGES || [])
      }
    } catch (error) {
      console.error("Не удалось загрузить данные:", error.message)
    }
  }

  const onSubmit = async (formData) => {
    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    const url = "/project/api/"
    const method = isLoggedIn ? "PUT" : "POST"
    const body = JSON.stringify({
      FIO: formData.FIO,
      PHONE: formData.PHONE,
      EMAIL: formData.EMAIL,
      BIO: formData.COMMENT,
      CONTRACT: formData.agreement,
      LANGUAGES: LANGUAGES,
    })

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": "<?=$_SESSION['csrf_token']?>",
        },
        body,
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        if (result.errors && typeof result.errors === "object") {
          Object.entries(result.errors).forEach(([field, message]) => {
            setError(field.toLowerCase(), { type: "manual", message })
          })
        } else {
          throw new Error(result.message || "Ошибка отправки формы")
        }
      }

      if (result.credentials) {
        alert(
          `Логин: ${result.credentials.login}\nПароль: ${result.credentials.password}`
        )
      }

      reset()
      setFIO("")
      setPHONE("")
      setEMAIL("")
      setCOMMENT("")
      setLANGUAGES(["JavaScript", "PHP"])

      setSuccessMessage(result.message)
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="footer__form flex" onSubmit={handleSubmit(onSubmit)}>
      {/* ФИО */}
      <input
        className={`input ${errors.FIO ? "input--error" : ""}`}
        type="text"
        placeholder="Ваше имя"
        {...register("FIO", {
          required: "Ваше имя обязательно",
          pattern: {
            value: /^[А-ЯЁа-яёA-Za-z\s]{1,150}$/u,
            message: "Некорректное ФИО",
          },
        })}
        defaultValue={FIO}
        onChange={(e) => setFIO(e.target.value)}
      />
      {errors.FIO && (
        <span className="error-message">{errors.FIO.message}</span>
      )}

      {/* Телефон */}
      <input
        className={`input ${errors.PHONE ? "input--error" : ""}`}
        type="tel"
        placeholder="Телефон"
        {...register("PHONE", {
          required: "Телефон обязателен",
          pattern: {
            value: /^\+?\d{10,15}$/,
            message: "Некорректный номер телефона",
          },
        })}
        defaultValue={PHONE}
        onChange={(e) => setPHONE(e.target.value)}
      />
      {errors.PHONE && (
        <span className="error-message">{errors.PHONE.message}</span>
      )}

      {/* Email */}
      <input
        className={`input ${errors.EMAIL ? "input--error" : ""}`}
        type="email"
        placeholder="E-mail"
        {...register("EMAIL", {
          required: "E-mail обязателен",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Некорректный E-mail",
          },
        })}
        defaultValue={EMAIL}
        onChange={(e) => setEMAIL(e.target.value)}
      />
      {errors.EMAIL && (
        <span className="error-message">{errors.EMAIL.message}</span>
      )}

      {/* Биография */}
      <textarea
        style={{ resize: "none" }}
        className="form__textarea"
        placeholder="Ваш комментарий"
        {...register("COMMENT")}
        defaultValue={COMMENT}
        onChange={(e) => setCOMMENT(e.target.value)}
      />

      {/* Языки программирования */}
      <label className="form__check">
        Выберите языки программирования:
        <select
          multiple
          value={LANGUAGES}
          onChange={(e) =>
            setLANGUAGES([
              ...Array.from(e.target.selectedOptions, (o) => o.value),
            ])
          }
          style={{ width: "100%", marginBottom: "10px" }}
        >
          {allLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </label>

      {/* Согласие */}
      <label className="form__check">
        <input
          className="label__input"
          type="checkbox"
          {...register("agreement", { required: "Необходимо согласие" })}
        />
        Отправляя заявку, я&nbsp;даю согласие на
        <a href="#"> обработку своих персональных данных.*</a>
      </label>
      {errors.agreement && (
        <span className="error-message" style={{ color: "red" }}>
          {errors.agreement.message}
        </span>
      )}

      {/* Кнопка отправки */}
      <button
        className="footer__btn btn__reset"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ClipLoader color="#ffffff" size={20} />
        ) : (
          "СВЯЖИТЕСЬ С НАМИ"
        )}
      </button>

      {/* Сообщения */}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </form>
  )
}

export default FooterForm

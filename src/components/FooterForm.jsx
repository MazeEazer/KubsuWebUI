import { useState } from "react"
import { useForm } from "react-hook-form"
import useLocalStorage from "../hooks/useLocalStorage"
import { ClipLoader } from "react-spinners"

const FooterForm = () => {
  const [FIO, setFIO] = useLocalStorage("FIO", "")
  const [PHONE, setPHONE] = useLocalStorage("PHONE", "")
  const [EMAIL, setEMAIL] = useLocalStorage("EMAIL", "")
  const [COMMENT, setCOMMENT] = useLocalStorage("COMMENT", "")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formcarry.com/s/m1h-mKEGfLX", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Ошибка при отправке формы")
      }

      reset()

      setFIO("")
      setPHONE("")
      setEMAIL("")
      setCOMMENT("")

      setSuccessMessage(true)
      setErrorMessage(false)

      setTimeout(() => {
        setSuccessMessage(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage(true)
      setSuccessMessage(false)

      setTimeout(() => {
        setErrorMessage(false)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      className="footer__form flex"
      method="POST"
      id="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={`input ${errors.FIO ? "input--error" : ""}`}
        type="text"
        placeholder="Ваше имя"
        {...register("FIO", { required: "Ваше имя обязательно" })}
        value={FIO}
        onChange={(e) => setFIO(e.target.value)}
      />
      {errors.FIO && (
        <span className="error-message">{errors.FIO.message}</span>
      )}

      <input
        className={`input ${errors.PHONE ? "input--error" : ""}`}
        type="tel"
        placeholder="Телефон"
        {...register("PHONE", {
          required: "Телефон обязателен",
          pattern: {
            value: /^[+]?[0-9]{10,14}$/,
            message: "Некорректный номер телефона",
          },
        })}
        value={PHONE}
        onChange={(e) => setPHONE(e.target.value)}
      />
      {errors.PHONE && (
        <span className="error-message">{errors.PHONE.message}</span>
      )}

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
        value={EMAIL}
        onChange={(e) => setEMAIL(e.target.value)}
      />
      {errors.EMAIL && (
        <span className="error-message">{errors.EMAIL.message}</span>
      )}

      <textarea
        style={{ resize: "none" }}
        className="form__textarea"
        placeholder="Ваш комментарий"
        {...register("COMMENT")}
        value={COMMENT}
        onChange={(e) => setCOMMENT(e.target.value)}
      ></textarea>

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

      <button className="footer__btn btn__reset" type="submit">
        {isSubmitting ? (
          <ClipLoader color="#ffffff" size={20} />
        ) : (
          "СВЯЖИТЕСЬ С НАМИ"
        )}
      </button>

      {successMessage && (
        <div style={{ color: "green" }}>
          Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      {errorMessage && (
        <div style={{ color: "red" }}>
          Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.
        </div>
      )}
    </form>
  )
}

export default FooterForm

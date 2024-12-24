import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import useLocalStorage from "../../hooks/useLocalStorage"
import { ClipLoader } from "react-spinners"

import styles from "./PopUpForm.module.css"

const PopUpForm = () => {
  const [fio, setFio] = useLocalStorage("fio", "")
  const [phone, setPhone] = useLocalStorage("phone", "")
  const [email, setEmail] = useLocalStorage("email", "")
  const [comment, setComment] = useLocalStorage("comment", "")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [shouldNavigate, setShouldNavigate] = useState(false)
  const formRef = useRef(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    let animationFrameId
    const startTime = performance.now()
    const duration = 300

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      setOpacity(progress)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  useEffect(() => {
    if (shouldNavigate && opacity === 0) {
      navigate("/")
    }
  }, [shouldNavigate, opacity, navigate])

  const fadeOut = () => {
    let animationFrameId
    const startTime = performance.now()
    const duration = 300

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.max(1 - elapsedTime / duration, 0)
      setOpacity(progress)

      if (progress > 0) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setShouldNavigate(true)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }

  const handleClose = () => {
    fadeOut()
  }

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(false)
        reset()
        setFio("")
        setPhone("")
        setEmail("")
        setComment("")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [successMessage, reset, setFio, setPhone, setEmail, setComment])

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [errorMessage])

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

      console.log(data)

      setSuccessMessage(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.overlay} style={{ opacity }} onClick={handleClose}>
      <div
        ref={formRef}
        className={styles.formContainer}
        style={{
          transform: `scale(${opacity})`,
          opacity,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <form
          className={`${styles.footer__form} ${styles.flex}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className={styles.formTitle}>Свяжитесь с нами</h2>

          <input
            value={fio}
            className={styles.input}
            type="text"
            {...register("fio", { required: "Ваше имя обязательно" })}
            onChange={(e) => setFio(e.target.value)}
            placeholder="Ваше имя"
          />
          {errors.fio && (
            <span className={styles.error}>{errors.fio.message}</span>
          )}

          <input
            value={phone}
            className={styles.input}
            type="tel"
            {...register("phone", {
              required: "Телефон обязателен",
              pattern: {
                value: /^[+]?[0-9]{10,14}$/,
                message: "Некорректный номер телефона",
              },
            })}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}

          <input
            value={email}
            className={styles.input}
            type="email"
            {...register("email", {
              required: "E-mail обязателен",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Некорректный E-mail",
              },
            })}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}

          <textarea
            value={comment}
            className={styles.form__textarea}
            {...register("comment")}
            placeholder="Ваш комментарий"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <label className={styles.form__check}>
            <input
              className={styles.label__input}
              type="checkbox"
              {...register("agreement", { required: "Необходимо согласие" })}
            />
            Отправляя заявку, я&nbsp;даю согласие на
            <a style={{ color: " #f14d34" }} href="#">
              {" "}
              обработку своих персональных данных.*
            </a>
          </label>
          {errors.agreement && (
            <span className={styles.error}>{errors.agreement.message}</span>
          )}

          <div
            className="g-recaptcha"
            data-sitekey="6LfemJ4qAAAAALkKs3Cq4CaQtp4ks14o020KKNYP"
          ></div>

          <button
            className={`${styles.footer__btn} ${styles.btn__reset}`}
            type="submit"
          >
            {isSubmitting ? (
              <ClipLoader color="#ffffff" size={20} />
            ) : (
              "СВЯЖИТЕСЬ С НАМИ"
            )}
          </button>

          {errorMessage && (
            <div className={styles.errorMessage}>
              Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще
              раз.
            </div>
          )}

          {successMessage && (
            <div className={styles.successMessage}>
              Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default PopUpForm

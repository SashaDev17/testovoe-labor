import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./Form.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно"),
  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Введите правильный номер телефона")
    .required("Телефон обязателен"),
  agreement: yup.boolean().oneOf([true], "Вы должны согласиться с условиями"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    alert("Форма отправлена!");

    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} id="form">
      <h2 className={styles.heading}>Отправь форму</h2>
      <div className={styles.formRow}>
        <div className={styles.formGroup_left}>
          <input
            type="text"
            placeholder="Имя"
            {...register("name")}
            className={`${styles.input} ${
              errors.name ? styles.errorBorder : ""
            }`}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          <div className={styles.formGroupCheckbox}>
            <input
              type="checkbox"
              id="agreement"
              {...register("agreement")}
              className={`${styles.checkbox} ${
                errors.agreement ? styles.errorBorder : ""
              }`}
            />
            <label htmlFor="agreement">Согласен, отказываюсь</label>
          </div>
          {errors.agreement && (
            <p className={styles.error}>{errors.agreement.message}</p>
          )}
        </div>
        <div className={styles.formGroup_right}>
          <input
            type="tel"
            placeholder="Телефон"
            {...register("phone")}
            className={`${styles.input} ${
              errors.phone ? styles.errorBorder : ""
            }`}
          />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}
          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

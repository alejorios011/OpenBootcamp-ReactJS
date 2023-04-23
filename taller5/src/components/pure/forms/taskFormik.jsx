import React from "react";
import PropTypes from "prop-types";

import * as Yup from "yup";

// Models
import "../../../models/levels.enum";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";
import { Formik, Form, Field, ErrorMessage } from "formik";

const TaskFormik = ({ add }) => {
  let initialTask = new Task("", "", false, LEVELS.NORMAL);
  // We create the data schema with yup
  const taskSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name too short")
      .max(30, "Name too long")
      .required("Task name is required"),
    description: Yup.string().required("Description is required"),
    level: Yup.string()
      .oneOf(
        [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
        "You must select a priority level: Normal / Urgent / Blocking"
      )
      .required(),
  });
  return (
    <>
      <Formik
        initialValues={initialTask}
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // Store the info in a new object
          const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
          );
          // Through the function we send the new Task
          add(newTask);
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <div className="container w-50 mt-3 mb-3">
            <Form>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="name" className="form-label">
                    Task name
                  </label>
                  <Field
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your task name"
                    className="form-control"
                  />

                  {/* Task Name Errors */}
                  {errors.name && touched.name && (
                    <ErrorMessage name="name" component="div"></ErrorMessage>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    placeholder="Write the description of your task"
                    className="form-control"
                  />

                  {/* Description Errors */}
                  {errors.description && touched.description && (
                    <ErrorMessage
                      name="description"
                      component="div"
                    ></ErrorMessage>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="level" className="form-label">
                    Open this Menu to select the level of priority of the task
                  </label>
                  <Field as="select" name="level" className="form-select">
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                  </Field>
                </div>

                <div className="col-12">
                  <button className="btn btn-success mt-3" type="submit">
                    Create new Task
                  </button>
                  {isSubmitting ? <p>Sending your new task...</p> : null}
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

TaskFormik.prototype = {
  add: PropTypes.func.isRequired,
};

export default TaskFormik;

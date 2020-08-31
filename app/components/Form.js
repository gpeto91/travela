import React, { useState } from "react";
import { withApollo } from '../libs/apollo';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ErrorMessage, useFormik } from 'formik';
import { string, number, date, object } from "yup";
import moment from "moment";
import MaskedInput from 'react-text-mask';
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker, DatePicker } from '@material-ui/pickers';

import { SAVE_TRAVEL } from "../graphql/saveTravel";
import { GET_TRAVELS } from "../graphql/getTravel";

import InputContainer from "./InputContainer";

const AppForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [dateFrom, setDateFrom] = useState(moment().format("YYYY-MM-DD"));
    const [dateTo, setDateTo] = useState(moment().add(1, "day").format("YYYY-MM-DD"));
    const [numberPeople, setnumberPeople] = useState("");
    const [createTravel, { loading, error }] = useMutation(SAVE_TRAVEL);
    const router = useRouter();
    const [erro, setErro] = useState("");
    //const [appLoading, setAppLoading] = useState(false);

    const valSchema = object().shape({
        name: string().required(),
        phone: string().required().min(10, "invalid phone number"),
        origin: string().required(),
        destination: string().required(),
        dateFrom: date().required("provide a valid date to travel").nullable().min(moment().format("YYYY-MM-DD"), "not a valid date"),
        dateTo: date().required("provide a valid date to return").nullable().when("dateFrom", (dateFrom, schema) => (dateFrom && schema.min(dateFrom,"return's date must be later than departure's date"))),
        numberPeople: number().positive("number of people must be greater than zero").integer().required("please provide the number of people to travel")
    })

    const formik = useFormik({
        initialValues: {
            name: name,
            phone: phone,
            origin: origin,
            destination: destination,
            dateFrom: dateFrom,
            dateTo: dateTo,
            numberPeople: numberPeople
        },
        validationSchema: valSchema,
        onSubmit: (values, { resetForm }) => {
            createTravel({
                variables: {
                    ...values,
                    dateTo: moment(values.dateTo).unix(),
                    dateFrom: moment(values.dateFrom).unix()
                },
                optimisticResponse: true,
                update: cache => {
                    const oldCount = cache.readQuery({ query: GET_TRAVELS });
                    const newCount = oldCount.travels + 1;

                    cache.writeQuery({
                        query: GET_TRAVELS,
                        data: {
                            travels: newCount
                        }
                    });
                }
            })
            .then(res => {
                router.push({
                    pathname: "/success",
                    query: res.data.createTravel.travel
                }, "/success");

                resetForm({values: ""});
            })
            .catch(error => {
                let message;
                if (error.graphQLErrors.length) {
                    message = error.graphQLErrors[0].extensions.exception.errors.name;

                    console.log(message);
                } else if (error.networkError) {
                    message = error.networkError.result.errors[0].extensions.code;
                }

                setErro(message);
            })
        }
    })

    return(
        <>
            {erro && (
                <Snackbar open={Boolean(erro)} autoHideDuration={3500} onClose={() => setErro("")} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                    <Alert severity="error" variant="filled" onClose={() => setErro("")}>
                        <AlertTitle>Error</AlertTitle>
                        { erro }
                    </Alert>
                </Snackbar>
            )}

            <form noValidate style={{maxWidth: 600, margin: "45px auto", marginBottom: 0, padding: "0 15px", flex: 1}}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    {/* NAME */}
                    <TextField
                        variant="outlined"
                        name="name"
                        type="text"
                        label="Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        fullWidth
                        error={formik.errors.name && formik.touched.name}
                        helperText={
                            formik.errors.name &&
                            formik.touched.name &&
                            formik.errors.name
                        }
                        margin="dense"
                        color="secondary"
                        required
                    />

                    {/* PHONE */}
                    <TextField
                        variant="outlined"
                        name="phone"
                        type="text"
                        label="Phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        fullWidth
                        error={formik.errors.phone && formik.touched.phone}
                        helperText={
                            formik.errors.phone &&
                            formik.touched.phone &&
                            formik.errors.phone
                        }
                        margin="dense"
                        color="secondary"
                        required
                        InputProps={{
                            inputComponent: (props) => {
                                const {inputRef, ...other} = props;

                                return (
                                    <MaskedInput
                                        {...other}
                                        onChange={() => {}}
                                        onBlur={e => {
                                            formik.setFieldValue("phone", e.target.value.replace(/\D/g, ''), true)
                                        }}
                                        ref={(ref) => {
                                            inputRef(ref ? ref.inputElement : null);
                                        }}
                                        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                    />
                                )
                            }
                        }}
                    />

                    {/* ORIGIN */}
                    <TextField
                        variant="outlined"
                        name="origin"
                        type="text"
                        label="Origin"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.origin}
                        fullWidth
                        error={formik.errors.origin && formik.touched.origin}
                        helperText={
                            formik.errors.origin &&
                            formik.touched.origin &&
                            formik.errors.origin
                        }
                        margin="dense"
                        color="secondary"
                        required
                    />

                    {/* DESTINATION */}
                    <TextField
                        variant="outlined"
                        name="destination"
                        type="text"
                        label="Destination"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.destination}
                        fullWidth
                        error={formik.errors.destination && formik.touched.destination}
                        helperText={
                            formik.errors.destination &&
                            formik.touched.destination &&
                            formik.errors.destination
                        }
                        margin="dense"
                        color="secondary"
                        required
                    />

                    {/* DATE FROM */}
                    <DatePicker
                        inputVariant="outlined"
                        name="dateFrom"
                        format="MM/DD/YYYY"
                        onBlur={formik.handleBlur}
                        value={formik.values.dateFrom}
                        disablePast={true}
                        onChange={val => {
                            if (val && val._isValid) {
                                formik.setFieldValue("dateFrom", val, true);
                            } else {
                                formik.setFieldValue("dateFrom", "", true);
                            }
                        }}
                        fullWidth
                        error={formik.errors.dateFrom && formik.touched.dateFrom}
                        helperText={
                            formik.errors.dateFrom &&
                            formik.touched.dateFrom &&
                            formik.errors.dateFrom
                        }
                        margin="dense"
                        color="secondary"
                        required
                        label="Date From"
                    />

                    {/* DATE TO */}
                    <DatePicker
                        inputVariant="outlined"
                        name="dateTo"
                        format="MM/DD/YYYY"
                        onBlur={formik.handleBlur}
                        value={formik.values.dateTo}
                        minDate={moment(formik.values.dateFrom).add(1, "day")}
                        onChange={val => {
                            formik.setFieldValue("dateTo", val);
                        }}
                        fullWidth
                        error={formik.errors.dateTo && formik.touched.dateTo}
                        helperText={
                            formik.errors.dateTo &&
                            formik.touched.dateTo &&
                            formik.errors.dateTo
                        }
                        margin="dense"
                        color="secondary"
                        required
                        label="Date To"
                    />

                    {/* NUMBER OF PEOPLE */}
                    <TextField
                        variant="outlined"
                        name="numberPeople"
                        type="number"
                        label="Number of people"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.numberPeople}
                        fullWidth
                        error={formik.errors.numberPeople && formik.touched.numberPeople}
                        helperText={
                            formik.errors.numberPeople &&
                            formik.touched.numberPeople &&
                            formik.errors.numberPeople
                        }
                        margin="dense"
                        color="secondary"
                        required
                    />

                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={formik.handleSubmit}
                        style={{
                            marginTop: 40,
                            display: "flex",
                            alignItems: "center"
                        }}
                        disabled={loading}
                    >
                        {loading && <CircularProgress color="secondary" style={{width: 24, marginRight: 10}} />}
                        Book
                    </Button>
                </MuiPickersUtilsProvider>
            </form>
        </>
    )
}

export default withApollo({ ssr: true })(AppForm);

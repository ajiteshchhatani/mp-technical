import React from "react";
import { Box, Input, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./form-styles.scss";
import infologo from "../../public/Vector.svg";

export default function InvoiceForm() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => navigate("/")

    return (
        <Box className="form-container">
            <Typography variant="h1" className="form-heading">Create and send invoice</Typography>
            <p className="form-caption">An email with the invoice will be sent to your customer with a payment link for them to settle the invoice</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <p className="form-group-heading">Customer</p>
                <Box className="form-group">

                    <Box className="form-group-validation">
                        <Input
                            className="form-control"
                            placeholder="First name"
                            {...register("first_name", { required: true })}
                            aria-invalid={errors.first_name ? "true" : "false"}
                        />
                        {errors.first_name?.type === 'required' && <div role="alert" className="error-message"><img src={infologo} alt="Info icon for error message" />First name is required</div>}
                    </Box>

                    <Box className="form-group-validation">
                        <Input
                            className="form-control"
                            placeholder="Last name"
                            {...register("last_name", { required: true })}
                            aria-invalid={errors.last_name ? "true" : "fale"}
                        />
                        {errors.last_name?.type === 'required' && <div role="alert" className="error-message"><img src={infologo} alt="Info icon for error message" />Last name is required</div>}
                    </Box>

                    <Box className="form-group-validation">
                        <Input
                            className="form-control"
                            placeholder="Email"
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "fale"}
                        />
                        {errors.email?.type === 'required' && <div role="alert" className="error-message"><img src={infologo} alt="Info icon for error message" />Email is required</div>}
                    </Box>

                    <Box>
                        <Input className="form-control" placeholder="Phone" />
                    </Box>

                </Box>

                <p className="form-group-heading">Amount</p>
                <Box className="form-group">
                    <Box className="form-group-validation">
                        <Input
                            className="form-control"
                            placeholder="Amount"
                            {...register("amount", { required: true })}
                            aria-invalid={errors.amount ? "true" : "fale"}
                        />
                        {errors.amount?.type === 'required' && <div role="alert" className="error-message"><img src={infologo} alt="Info icon for error message" />Amount is required</div>}
                    </Box>
                </Box>

                <p className="form-group-heading">Description</p>
                <Box>
                    <Box className="form-group-validation">
                        <Input
                            sx={{ width: '100%' }}
                            placeholder="What's payment for"
                            {...register("description", { required: true })}
                            aria-invalid={errors.description ? "true" : "fale"}
                        />
                        {errors.description?.type === 'required' && <div role="alert" className="error-message"><img src={infologo} alt="Info icon for error message" />Description is required</div>}
                    </Box>
                </Box>

                <input type="submit" value="Send invoice" className="send-invoice-button" />
            </form>
        </Box>
    )
}
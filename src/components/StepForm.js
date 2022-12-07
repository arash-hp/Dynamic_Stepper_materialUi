import { Grid } from "@material-ui/core";
import React from "react";
import { InputField } from "./InputField";
import { useField } from "formik";
import { SelectField } from "./SelectField";

const CreatedByData = [
  {
    value: "None",
    logo: "None",
  },
  {
    value: "Sina",
    logo: "https://www.pngfind.com/pngs/m/381-3819326_default-avatar-svg-png-icon-free-download-avatar.png",
  },
  {
    value: "Arash",
    logo: "https://www.pngfind.com/pngs/m/381-3819326_default-avatar-svg-png-icon-free-download-avatar.png",
  },
];

const productData = [
  {
    value: "None",
    logo: "None",
  },
  {
    value: "Laptop",
    logo: "https://media.nbb-cdn.de/images/products/760000/762654/HUAWEI_B7-410_Front_6525.jpg?size=2800",
  },
  {
    value: "Monitor",
    logo: "https://media.nbb-cdn.de/product_images/listing_image/Philips-243V7QDSB-Full-HD-Monitor-IPSPanel-p313818?size=400",
  },
];

export default function StepForm(props) {
  const { step, value } = props;

  return (
    <Grid
      container
      spacing={3}
      style={{ display: "flex", flexDirection: "column", margin: 16 }}
    >
      <Grid item xs={12} sm={6}>
        <InputField name={`steps[${step}].name`} label="name" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField name={`steps[${step}].family`} label="family" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputField name={`steps[${step}].message`} label="message" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectField
          name={`steps[${step}].product`}
          label="choose your product"
          data={productData}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectField
          name={`steps[${step}].created_by`}
          label="choose your person"
          data={CreatedByData}
          fullWidth
          step={step}
          value={value}
        />
      </Grid>
    </Grid>
  );
}

<template>
  <div class="g-dateInput-form-group">
    <fieldset
      v-bind:aria-describedby="dobHint"
      class="g-dateInput-fieldset"
      role="group"
    >
      <legend class="g-dateInput-fieldset__legend">
        What is your date of birth?
      </legend>

      <span class="g-dateInput-hint" v-bind:id="dobHint">
        For example, 31 3 1980
      </span>

      <div class="g-date-input" v-bind:id="dob">
        <div class="g-date-input__item">
          <div class="g-dateInput-form-group">
            <label
              class="g-dateInput-label g-date-input__label"
              v-bind:for="dobDay"
            >
              Day
            </label>

            <input
              class="g-dateInput-input g-date-input__input g-dateInput-input--width-2"
              v-bind:id="dobDay"
              v-bind:name="name"
              pattern="[0-9]*"
              v-bind:type="computed__type"
              v-bind:disabled="disabled"
              v-bind:readonly="readOnly"
              v-bind:autofocus="autoFocus"
              v-bind:value="value"
              v-bind:spellcheck="spellCheck"
              v-bind:autocomplete="computed__autocomplete"
            />
          </div>
        </div>

        <div class="g-date-input__item">
          <div class="g-dateInput-form-group">
            <label
              class="g-dateInput-label g-date-input__label"
              v-bind:for="dobMonth"
            >
              Month
            </label>

            <input
              class="g-dateInput-input g-date-input__input g-dateInput-input--width-2"
              v-bind:id="dobMonth"
              v-bind:name="name2"
              pattern="[0-9]*"
              v-bind:type="computed__type2"
              v-bind:disabled="disabled2"
              v-bind:readonly="readOnly2"
              v-bind:autofocus="autoFocus2"
              v-bind:value="value2"
              v-bind:spellcheck="spellCheck2"
              v-bind:autocomplete="computed__autocomplete2"
            />
          </div>
        </div>

        <div class="g-date-input__item">
          <div class="g-dateInput-form-group">
            <label
              class="g-dateInput-label g-date-input__label"
              v-bind:for="dobYear"
            >
              Year
            </label>

            <input
              class="g-dateInput-input g-date-input__input g-dateInput-input--width-4"
              v-bind:id="dobYear"
              v-bind:name="name3"
              pattern="[0-9]*"
              v-bind:type="computed__type3"
              v-bind:disabled="disabled3"
              v-bind:readonly="readOnly3"
              v-bind:autofocus="autoFocus3"
              v-bind:value="value3"
              v-bind:spellcheck="spellCheck3"
              v-bind:autocomplete="computed__autocomplete3"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div> </template
><script>
import Vue from "vue";

const constants = {
  type: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
  autoComplete: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  type2: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
  autoComplete2: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  },
  type3: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
  autoComplete3: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    dobHint: { type: String, required: false },
    dob: { type: String, required: false },
    dobDay: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    value: { type: String, required: false },
    type: {
      type: String,
      validator: value => {
        return (
          [
            "Button",
            "Checkbox",
            "Color",
            "Date",
            "DateTime: Local",
            "Email",
            "File",
            "Hidden",
            "Image",
            "Month",
            "Number",
            "Password",
            "Radio",
            "Range",
            "Reset",
            "Search",
            "Submit",
            "Telephone",
            "Text",
            "Time",
            "URL",
            "Week"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    spellCheck: { type: Boolean, default: false, required: false },
    autoComplete: {
      type: String,
      validator: value => {
        return (
          [
            "Off",
            "On",
            "Name",
            "Honorific: Prefix",
            "Given Name",
            "Additional Name",
            "Family Name",
            "Honorific: Suffix",
            "Nickname",
            "Email",
            "Username",
            "New Password",
            "Current Password",
            "Organization Title",
            "Organization",
            "Street Address",
            "Address Line 1",
            "Address Line 2",
            "Address Line 3",
            "Address Level 4",
            "Address Level 3",
            "Address Level 2",
            "Address Level 1",
            "Country",
            "Country Name",
            "Postal Code",
            "Credit Card: Name",
            "Credit Card: Given Name",
            "Credit Card: Additional Name",
            "Credit Card: Family Name",
            "Credit Card: Number",
            "Credit Card: Expiry",
            "Credit Card: Expiry Month",
            "Credit Card: Expiry Year",
            "Credit Card: CSC",
            "Credit Card: Type",
            "Transaction: Currency",
            "Transaction: Amount",
            "Language",
            "Birthday",
            "Birthday: Day",
            "Birthday: Month",
            "Birthday: Year",
            "Sex",
            "Telephone",
            "Telephone: Country Code",
            "Telephone: National",
            "Telephone: Area Code",
            "Telephone: Local",
            "Telephone: Extension",
            "IMPP",
            "URL",
            "Photo"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    dobMonth: { type: String, required: false },
    name2: { type: String, required: true },
    disabled2: { type: Boolean, default: false, required: false },
    readOnly2: { type: Boolean, default: false, required: false },
    autoFocus2: { type: Boolean, default: false, required: false },
    value2: { type: String, required: false },
    type2: {
      type: String,
      validator: value => {
        return (
          [
            "Button",
            "Checkbox",
            "Color",
            "Date",
            "DateTime: Local",
            "Email",
            "File",
            "Hidden",
            "Image",
            "Month",
            "Number",
            "Password",
            "Radio",
            "Range",
            "Reset",
            "Search",
            "Submit",
            "Telephone",
            "Text",
            "Time",
            "URL",
            "Week"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    spellCheck2: { type: Boolean, default: false, required: false },
    autoComplete2: {
      type: String,
      validator: value => {
        return (
          [
            "Off",
            "On",
            "Name",
            "Honorific: Prefix",
            "Given Name",
            "Additional Name",
            "Family Name",
            "Honorific: Suffix",
            "Nickname",
            "Email",
            "Username",
            "New Password",
            "Current Password",
            "Organization Title",
            "Organization",
            "Street Address",
            "Address Line 1",
            "Address Line 2",
            "Address Line 3",
            "Address Level 4",
            "Address Level 3",
            "Address Level 2",
            "Address Level 1",
            "Country",
            "Country Name",
            "Postal Code",
            "Credit Card: Name",
            "Credit Card: Given Name",
            "Credit Card: Additional Name",
            "Credit Card: Family Name",
            "Credit Card: Number",
            "Credit Card: Expiry",
            "Credit Card: Expiry Month",
            "Credit Card: Expiry Year",
            "Credit Card: CSC",
            "Credit Card: Type",
            "Transaction: Currency",
            "Transaction: Amount",
            "Language",
            "Birthday",
            "Birthday: Day",
            "Birthday: Month",
            "Birthday: Year",
            "Sex",
            "Telephone",
            "Telephone: Country Code",
            "Telephone: National",
            "Telephone: Area Code",
            "Telephone: Local",
            "Telephone: Extension",
            "IMPP",
            "URL",
            "Photo"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    dobYear: { type: String, required: false },
    name3: { type: String, required: true },
    disabled3: { type: Boolean, default: false, required: false },
    readOnly3: { type: Boolean, default: false, required: false },
    autoFocus3: { type: Boolean, default: false, required: false },
    value3: { type: String, required: false },
    type3: {
      type: String,
      validator: value => {
        return (
          [
            "Button",
            "Checkbox",
            "Color",
            "Date",
            "DateTime: Local",
            "Email",
            "File",
            "Hidden",
            "Image",
            "Month",
            "Number",
            "Password",
            "Radio",
            "Range",
            "Reset",
            "Search",
            "Submit",
            "Telephone",
            "Text",
            "Time",
            "URL",
            "Week"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    spellCheck3: { type: Boolean, default: false, required: false },
    autoComplete3: {
      type: String,
      validator: value => {
        return (
          [
            "Off",
            "On",
            "Name",
            "Honorific: Prefix",
            "Given Name",
            "Additional Name",
            "Family Name",
            "Honorific: Suffix",
            "Nickname",
            "Email",
            "Username",
            "New Password",
            "Current Password",
            "Organization Title",
            "Organization",
            "Street Address",
            "Address Line 1",
            "Address Line 2",
            "Address Line 3",
            "Address Level 4",
            "Address Level 3",
            "Address Level 2",
            "Address Level 1",
            "Country",
            "Country Name",
            "Postal Code",
            "Credit Card: Name",
            "Credit Card: Given Name",
            "Credit Card: Additional Name",
            "Credit Card: Family Name",
            "Credit Card: Number",
            "Credit Card: Expiry",
            "Credit Card: Expiry Month",
            "Credit Card: Expiry Year",
            "Credit Card: CSC",
            "Credit Card: Type",
            "Transaction: Currency",
            "Transaction: Amount",
            "Language",
            "Birthday",
            "Birthday: Day",
            "Birthday: Month",
            "Birthday: Year",
            "Sex",
            "Telephone",
            "Telephone: Country Code",
            "Telephone: National",
            "Telephone: Area Code",
            "Telephone: Local",
            "Telephone: Extension",
            "IMPP",
            "URL",
            "Photo"
          ].indexOf(value) !== -1
        );
      },
      required: true
    }
  },
  computed: {
    computed__type() {
      return constants[this.type] !== undefined ? constants[this.type] : "";
    },
    computed__autocomplete() {
      return constants[this.autoComplete] !== undefined
        ? constants[this.autoComplete]
        : "";
    },
    computed__type2() {
      return constants[this.type2] !== undefined ? constants[this.type2] : "";
    },
    computed__autocomplete2() {
      return constants[this.autoComplete2] !== undefined
        ? constants[this.autoComplete2]
        : "";
    },
    computed__type3() {
      return constants[this.type3] !== undefined ? constants[this.type3] : "";
    },
    computed__autocomplete3() {
      return constants[this.autoComplete3] !== undefined
        ? constants[this.autoComplete3]
        : "";
    }
  }
});</script
><style scoped>
.g-dateInput-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-dateInput-form-group {
    margin-bottom: 30px;
  }
}
.g-dateInput-form-group .g-dateInput-form-group:last-of-type {
  margin-bottom: 0;
}
.g-dateInput-form-group--error .g-dateInput-form-group {
  padding: 0;
  border: 0;
}
.g-dateInput-fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}
.g-dateInput-fieldset:after {
  content: "";
  display: block;
  clear: both;
}
.g-dateInput-fieldset__legend {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  box-sizing: border-box;
  display: table;
  max-width: 100%;
  margin-bottom: 0px;
  padding: 0;
  overflow: hidden;
  white-space: normal;
}
@media print {
  .g-dateInput-fieldset__legend {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-dateInput-fieldset__legend {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-dateInput-fieldset__legend {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-dateInput-fieldset__legend {
    color: #000000;
  }
}
.g-dateInput-hint {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  color: #595959;
}
@media print {
  .g-dateInput-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-dateInput-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-dateInput-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-dateInput-fieldset__legend + .g-dateInput-hint {
  margin-top: -5px;
}
.g-dateInput-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #2a2a2a;
  display: block;
  margin-bottom: 5px;
}
@media print {
  .g-dateInput-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-dateInput-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-dateInput-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-dateInput-label {
    color: #000000;
  }
}
.g-dateInput-character-count .g-dateInput-form-group {
  margin-bottom: 5px;
}
.g-dateInput-input {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin-top: 0;
  padding: 0.5rem;
  border: 1px solid #2a2a2a;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
@media print {
  .g-dateInput-input {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-dateInput-input {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-dateInput-input {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-dateInput-input:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-dateInput-input::-webkit-outer-spin-button,
.g-dateInput-input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.g-dateInput-input[type="number"] {
  -moz-appearance: textfield;
}
.g-dateInput-input--width-4 {
  max-width: 9ex;
}
.g-dateInput-input--width-2 {
  max-width: 5.4ex;
}
.g-date-input {
  font-size: 0;
}
.g-date-input:after {
  content: "";
  display: block;
  clear: both;
}
.g-date-input__item {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 0;
}
.g-date-input__label {
  display: block;
}
.g-date-input__input {
  margin-bottom: 0;
}
</style>

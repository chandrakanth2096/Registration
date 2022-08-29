import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameErr: false,
    showLastNameErr: false,
    isFormSubmited: false,
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({
      isFormSubmited: false,
      firstNameInput: '',
      lastNameInput: '',
    })
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({showFirstNameErr: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameErr: !isValidLastName})
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmited: true})
    } else {
      this.setState({
        showFirstNameErr: !isValidFirstName,
        showLastNameErr: !isValidLastName,
        isFormSubmited: false,
      })
    }
  }

  renderSuccessCard = () => (
    <div className="success-page">
      <img
        className="success"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-another"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderSubmitForm = () => {
    const {
      firstNameInput,
      lastNameInput,
      showFirstNameErr,
      showLastNameErr,
    } = this.state
    const firstClassName = showFirstNameErr ? 'input input-err' : 'input'
    const lastClassName = showLastNameErr ? 'input input-err' : 'input'

    return (
      <form className="from" onSubmit={this.submitForm}>
        <div className="input-container">
          <label className="label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            className={firstClassName}
            id="firstName"
            placeholder="First name"
            value={firstNameInput}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
          {showFirstNameErr && <p className="err-msg">Required</p>}
        </div>
        <div className="input-container">
          <label className="label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            className={lastClassName}
            id="lastName"
            placeholder="Last name"
            value={lastNameInput}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
          {showLastNameErr && <p className="err-msg">Required</p>}
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmited} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="registration-card">
          {isFormSubmited ? this.renderSuccessCard() : this.renderSubmitForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

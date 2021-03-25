import React from 'react'
import { connect } from 'react-redux'

class InputFeld extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
    }
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({name: event.target.value})
  }

  render () {
    return (
      <div className='InputFeld'>
        <p>Gib dein Namen ein:</p>
         <input 
          placeholder='Gib hier dein Namen ein'
          value={this.state.name}
          onChange={this.handleChange}
          onBlur={() => {
            this.props.nameHinzufuegen(this.state.name)
            this.setState({name: ''})
          }}
         /> 
         <p>Hallo {this.props.name}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.name
})

const mapDispatchToProps = (dispatch) => ({
  nameHinzufuegen: (data) => dispatch({type: "NAME_HINZUFUEGEN", payload: data})
}) 

export default connect(mapStateToProps, mapDispatchToProps)(InputFeld)

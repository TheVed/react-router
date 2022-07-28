import React from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

const Card = ({card}) => {
  return(
    <div className='ui raised very padded text container segment'>
      <h3 className='ui header'>Alex</h3>
      <p>Body</p>
    </div>
  )
}



  // state = {id: ''}
  //
  // componentDidMount(){
  //   let id = this.props.params;
  //   this.setState({id})
  // }


const mapStateToProps = (state, ownProps) => {
  let title: ownProps
  console.log(title)
  return{
    card: state.cards.find((card) => {
      return card.title === title
    })
  }
}


// export default (props)=>{return(
//   <Card
//   {...props}
//   params={useParams()}
//   />)}

export default connect(mapStateToProps)(Card);

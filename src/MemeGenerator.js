import React from 'react'
import './style.css'

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImg:[]

        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }



    handleSubmit(event){
        event.preventDefault()
        const a = Math.floor(Math.random()*this.state.allMemeImg.length)
        const b = this.state.allMemeImg[a].url
        this.setState({
        randomImage: b
    })

    }



    handleChange(event){
        const{name, value}= event.target
        this.setState({[name]:value})

    }



 componentDidMount(){
       fetch("https://api.imgflip.com/get_memes")
      .then(response=> response.json())
      .then(response=> {
          const {memes} = response.data
          this.setState({ allMemeImg:memes})
          
      }
      )
      }


    render(){
        return(
    <div>
    <form className="meme-form" onSubmit={this.handleSubmit}>
    <input 
    type="text"
    name="topText"
    placeholder="Enter the first value"
    onChange={this.handleChange}/>    

    <input 
    type="text"
    name="bottomText"
    placeholder="Enter the second value"
    onChange={this.handleChange}/>    

    <button>Generator</button>
    </form>

        <div className="meme">
        <img src={this.state.randomImage} alt=""/>
        <h2 className="top">{this.state.topText}</h2>
        <h2 className="bottom">{this.state.bottomText}</h2>

        </div>
    
       </div>
        )
    }
}
export default MemeGenerator
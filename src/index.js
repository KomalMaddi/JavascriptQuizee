import { Component } from "react";
import ReactDOM from "react-dom";
import "./Styling/style.css";
import QBank from "./QBank";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";


class QuizZee extends Component{
    state={
        questionBank: [],
        score:0,
        responses:0
    };
    getQuestions=()=>{
        QBank().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    }
    computeAnswer=(answer,coreectAnswer) =>{
        if(answer===coreectAnswer)
        {
           this.setState({
               score: this.state.score+1
           })
        }
        this.setState({
            responses: this.state.responses<5?this.state.responses+1:5
        })
    }
    playAgain=()=>{
        this.getQuestions();
        this.setState({
            score:0,
            responses:0
        })
    }
    componentDidMount(){
        this.getQuestions();
    
    }
    render(){
        return(
            <div className="container">
                <div className="title">Javascript Quiz</div>
                {this.state.questionBank.length>0 && this.state.responses<5 &&
                this.state.questionBank.map(({question,answers,
                correct,questionID}) =>(<QuestionBox
                    question={question}
                    options={answers}
                    key={questionID}
                    selected={answer=> this.computeAnswer(answer,correct)}
                    ></QuestionBox>))}
                    {this.state.responses===5?(<Result score={this.state.score} playAgain={this.playAgain}/>):null}

            </div>

        );
    }

}
ReactDOM.render(<QuizZee/>,document.getElementById("root"));
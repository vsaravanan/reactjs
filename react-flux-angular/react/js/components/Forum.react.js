var Forum = React.createClass({
    
    getInitialState: function() {
        
        return {
            allAnswers: {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }
            }
        }
        
    },
   
    render: function() {
        
        return (
            <div>
                <ForumHeader />
                <div className="container">
                    <ForumQuestion />
                    <hr />
                    <ForumAnswers allAnswers={ this.state.allAnswers } />
                    <hr />
                    <ForumAddAnswerBox onAddAnswer={ this._onAddAnswer } />
                </div>
            </div>
        )
    },
    
    _onAddAnswer: function(answerText) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    }
    
});
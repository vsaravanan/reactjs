var Forum = React.createClass({
    
    getInitialState: function() {
        
        return {
            allAnswers: ForumStore.getAnswers()
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
        ForumActions.addNewAnswer(answerText);
    }
    
});
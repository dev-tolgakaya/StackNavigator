import React, {Component} from 'react';
import {View} from 'react-native';
import Todo from "./Todo";
import {connect} from 'react-redux';



class Todos extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                {
                    this.props.todos.todos.map((todo,index) => {
                        return (
                            <Todo key={index}
                                shortName={todo.shortName}
                                topicTitle={todo.topicTitle}
                                topicText={todo.topicText}
                            />
                        )
                    })
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {todos} = state
    return {todos}
};

export default connect(mapStateToProps)(Todos);


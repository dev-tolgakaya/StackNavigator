import React, {Component} from 'react';
import {View} from 'react-native';
import Todo from "./Todo";
import {connect} from 'react-redux';



class Todos extends Component {
    render() {
        return (
            <View>
                {
                    this.props.todos ? this.props.todos.map((todo,index) => {
                        return (
                            <Todo key={index}
                                shortName={'AB'}
                                title={todo.title}
                                body={todo.body}
                            />
                        )
                    }):null
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {todos} = state
    return todos
};

export default connect(mapStateToProps)(Todos);


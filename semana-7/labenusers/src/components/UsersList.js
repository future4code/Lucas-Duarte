import React from 'react';
import axios from 'axios'
// import {ListContainer} from "./UsersList-style"

class UsersList extends React.Component {

    render() {

        return (
            <div>
            <h3>Lista de gente VIP:</h3>
            {this.state.allUsers.map ( (item) => {
                        return (
                        <div>
                        <p> {item.name} - <button onClick = {() => this.deleteUser(item.id)} >deletar</button></p>
                        </div>
                        )
                    })}
          </div>
        )
    }

}

export default UsersList;

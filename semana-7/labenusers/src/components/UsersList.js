import React from 'react';
import axios from 'axios'
// import {ListContainer} from "./UsersList-style"

class UsersList extends React.Component {

    // state = {
    //     allUsers: [],
    // }

    // getAllUsers = () => {

    //     const request = axios.get(
    //         "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    //         { headers: {
    //             Authorization: "fulano-teste-jackson"
    //         }}
    //     )

    //     request
    //     .then((response) => {
    //         this.setState({allUsers: response.data})
    //     })
    //     .catch((error) => {
    //         console.log("ERRO NA GETALLUSERS",error)
    //     })
    // }

    // componentDidMount() {
    //     this.getAllUsers()
    // }

    render() {

        return (
            <div>
                <h3>Usuários</h3>
                {/* {this.state.allUsers.map ( (item) => {
                    return (
                    <div>
                    <p> {item.name} - <strong>X</strong></p>
                    </div>
                    )
                })} */}
            </div>
        )
    }

}

export default UsersList;

import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: true,
            loading: false
        }
    }


    componentDidUpdate() {
        console.log('actualizacion');

        if (!!this.state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validación")

                this.setState({ loading: false });

                console.log("terminando la validación")
            }, 3000);
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad.</p>

                {this.state.error && (
                    <p> Error el codigo es incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}

                <input placeholder="Código de seguridad" />
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState };

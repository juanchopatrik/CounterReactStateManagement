import React from "react";

class Loading extends React.Component {
    componentWillUnmount() {
        console.log("Se desmonta el componente");
    }

    render() {
        return (
            <div>
                <p>Cargando...</p>
            </div>
        )
    }
}

export { Loading }; 
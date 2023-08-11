import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {

    const [state, setState] = React.useState({
        value: '',
        error: true,
        loading: false,
        deleted: false,
        confirmed: false
    });

    // console.log(value)

    React.useEffect(() => {
        console.log("Empezando el efecto")

        if (!!state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validación")

                if (state.value === SECURITY_CODE) {
                    setState({ ...state, error: false, loading: false, confirmed: false })
                } else {
                    setState({ ...state, error: true, loading: false });
                }

                console.log("terminando la validación")
            }, 3000);
        }

        console.log("Terminando el efecto")
    }, [state.loading]);

    if (!state.deleted && !state.confirmed) {
        return (
            <React.Fragment>

                <div>
                    <h2>Eliminar {name}</h2>

                    <p>Por favor, escribe el código de seguridad.</p>

                    {(state.error && !state.loading) && (
                        <p>Error: el código es incorrecto</p>
                    )}
                    {state.loading && (
                        <p>Cargando...</p>
                    )}

                    <input
                        placeholder="Código de seguridad"
                        value={state.value}
                        onChange={(event) => {
                            setState({ ...state, value: event.target.value })
                        }}
                    />
                    <button
                        onClick={() => {
                            setState({ ...state, loading: true })
                        }}
                    >Comprobar</button>
                </div>
            </React.Fragment>
        );
    } else if (!!state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p> Pedimos Confirmacion. Estas seguro?</p>
                <button onClick={() => setState({ ...state, deleted: true })}>Si estoy seguro</button>
                <button onClick={() => setState({ ...state, confirmed: false, value: '' })}>No estoy seguro</button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p> Eliminado</p>
                <button onClick={() => setState({ ...state, deleted: false, confirmed: false, value: '' })}>Resetear Volver atras</button>
            </React.Fragment>
        )
    }
}

export { UseState };

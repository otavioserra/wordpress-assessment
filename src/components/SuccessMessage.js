import { __ } from '@wordpress/i18n';
import Div from './Div'; // Supondo que você queira usar o seu componente Div

function SuccessMessage({ message }) {
    if (!message) {
        return null; // Não renderiza nada se não houver mensagem
    }

    return (
        <Div type="class" className="success-container">
            <h5 className="success-title">
                {__('Success!', 'otavio-serra-plugin')}
            </h5>
            <p className="success-text">{message}</p>
        </Div>
    );
}

export default SuccessMessage;
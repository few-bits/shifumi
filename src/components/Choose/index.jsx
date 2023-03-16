import { VALUES, MODE_RESULTS, MODE_FINISHED } from '../../constants';
import { ChooseWrapper, StyledChoose } from './styled';

function Choose({ moveHandler, mode }) {
    const disabled = [MODE_FINISHED, MODE_RESULTS].includes(mode);

    return (
        <ChooseWrapper>
            {VALUES.map(value => (
                <StyledChoose
                    value={value}
                    disabled={disabled}
                    key={value}
                    title={value}
                    onClick={() => !disabled && moveHandler(value)}
                />
            ))}
        </ChooseWrapper>
    )
}

export default Choose;
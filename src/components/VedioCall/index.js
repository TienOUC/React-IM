
import React from 'react'
import PropTypes from 'prop-types'
import StyledVedioCall, { Actions, Minimize, Action, Self } from './style'
import vedioCaller from 'assets/images/paper-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faCompressAlt, faPhoneSlash, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

function VedioCall ({ children, ...rest }) {
    return (
        <StyledVedioCall src={vedioCaller} {...rest}>
            <Minimize shape='rect'>
                <FontAwesomeIcon icon={faCompressAlt} />
            </Minimize>
            <Actions>
                <Action>
                    <FontAwesomeIcon icon={faMicrophone} />
                </Action>
                <Action type='hangoff'>
                    <FontAwesomeIcon icon={faPhoneSlash} />
                </Action>
                <Action>
                    <FontAwesomeIcon icon={faVolumeMute} />
                </Action>
            </Actions>
            <Self size='140px' />

            {children}
        </StyledVedioCall>
    )
}

VedioCall.propTypes = {
    children: PropTypes.any
}

export default VedioCall



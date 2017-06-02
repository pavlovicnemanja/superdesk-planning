import React from 'react'
import { Toggle } from '../index'
import { EVENTS } from '../../constants'

const PubStatusField = ({ input, label, meta }) => {
    const { touched, error, warning } = meta
    const hasBeenPublished = !!meta.initial
    const isPublished = input.value === EVENTS.PUB_STATUS.USABLE
    const onChange = (e) => {
        // "public" is checked
        if (e.target.value) {
            return input.onChange(EVENTS.PUB_STATUS.USABLE)
        }
        // if not and if it has been initially public
        if (hasBeenPublished) {
            return input.onChange(EVENTS.PUB_STATUS.WITHHOLD)
        // or it has never been public
        } else {
            return input.onChange(null)
        }
    }

    return (
        <div className="field">
            {label && <label>{label}</label>}
            <Toggle value={isPublished} onChange={onChange}/> Public event
            {touched && ((error && <span className="error-block">{error}</span>) ||
            (warning && <span className="help-block">{warning}</span>))}
        </div>
    )
}

PubStatusField.propTypes = {
    input: React.PropTypes.object.isRequired,
    label: React.PropTypes.string,
    meta: React.PropTypes.object.isRequired,
}

export default PubStatusField

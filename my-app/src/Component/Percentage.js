import React , {memo} from 'react';

const Percentage = (props) => {
    return (
        <div>
            {(props.done/(props.done+props.list))*100 + "%"}
        </div>
    );
}

export default memo(Percentage);

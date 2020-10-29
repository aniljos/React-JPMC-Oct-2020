import React from 'react';
import {connect} from 'react-redux';

function Category(props){

    return (

        <div>
            <h4>Category</h4>
            <p>
                <button onClick={props.fetch}>Fetch</button>
            </p>
        </div>
    )

}
const mapDispatchToProps = (dispatch)=> {
    return {
        fetch: () => dispatch({type: "FETCH_CATEGORIES"})
    }
}

export default connect(null, mapDispatchToProps)(Category);



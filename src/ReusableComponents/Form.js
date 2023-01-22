import React from 'react';

function Form({submitFunction}) {


    return (
       <form
       className='form'
       onSubmit={(event) => submitFunction(event)}>

        
            FORM
       </form>
    );
}

export default Form;
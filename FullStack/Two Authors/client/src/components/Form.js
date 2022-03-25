import React from "react";


const Form = (props) => {
    
    const {submitHandler, author, inputHandler, errors, buttonText} = props

    
    return (
        <div>
            <form onSubmit={submitHandler} className="w-25 mx-auto">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Name: </label>
                    <div className="col-sm-10">
                        <input 
                            name="authorName" 
                            value={author.authorName} 
                            onChange={inputHandler} 
                            type="text" 
                            className="form-control"/>
                    </div>
                    {
                    errors.authorName?
                    <p className="text-danger">{errors.authorName.message}</p>
                    :null
                }
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Type: </label>
                    <div className="col-sm-10">
                        <select onChange={inputHandler} name="type" value={author.type} className="form-select">
                            <option defaultValue hidden>Select a type</option>
                            <option value="Potion Maker">Potion Maker</option>
                            <option value="Transfiguration expert">Transfiguration expert</option>
                            <option value="Legelemens">Legelemens</option>
                            <option value="Herbologist">Herbologist</option>
                            <option value="Duelist">Duelist</option>
                        </select>
                    </div>
                    {
                        errors.type?
                        <p className="text-danger">{errors.type.message}</p>
                        :null
                        }
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Age: </label>
                    <div className="col-sm-10">
                        <input onChange={inputHandler} name="age" value={author.age} type="number" className="form-control"/>
                    </div>
                    {
                        errors.age?
                        <p className="text-danger">{errors.age.message}</p>
                        :null
                    }
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Auror: </label>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input name="auror" onChange={inputHandler} type="checkbox" checked={author.auror} className="form-check-input"/>
                        </div>
                    </div>
                    {
                        errors.auror?
                        <p className="text-danger">{errors.auror.message}</p>
                        :null
                    }
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">NEWTs: </label>
                    <div className="col-sm-10">
                        <input onChange={inputHandler} name="newt" value={author.newt} type="text" className="form-control"/>
                    </div>
                {
                    errors.newt?
                    <p className="text-danger">{errors.newt.message}</p>
                    :null
                }
                </div>
                <input type="submit" value={buttonText} className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default Form;

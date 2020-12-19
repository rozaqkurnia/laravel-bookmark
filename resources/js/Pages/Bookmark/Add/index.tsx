import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import Layout from '../../../common/layout';


const BookmarkAddPage:React.FC = () => {
    const [state, setstate] = useState({
        link: "",
        title: "Some hardcoded title"
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setstate({
            ...state, 
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Inertia.post('/bookmark/preview', state);
    }
    return (
        <Layout>
            <div className="row">
                <div className="col-sm-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="link">Link</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="link" 
                                onChange={handleChange} 
                                value={state.link}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default BookmarkAddPage

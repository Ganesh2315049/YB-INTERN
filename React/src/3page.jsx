import { useState } from 'react';

const Page3 = ({ setName, setDegree, setGmail }) => {
    const [formData, setFormData] = useState({
        name: '',
        degree: '',
        gmail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(formData.name);
        setDegree(formData.degree);
        setGmail(formData.gmail);

        
        setFormData({ name: '', degree: '', gmail: '' });
    };

    return (
        <div className="page-container">
            <h2>Update Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label htmlFor="degree">Degree:</label>
                    <input
                        type="text"
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        placeholder="Enter your degree"
                    />
                </div>
                <div>
                    <label htmlFor="gmail">Gmail:</label>
                    <input
                        type="email"
                        id="gmail"
                        name="gmail"
                        value={formData.gmail}
                        onChange={handleChange}
                        placeholder="Enter your gmail"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Page3; 


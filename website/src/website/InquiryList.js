import React from 'react';
// import Inquiry from './Inquiry';
import { Link } from 'react-router-dom';
import './css/InquiryList.css'

const InquiryList = (props) => {
    const { data } = props;

    const content = data.slice(0).reverse().map( (item, index) => (
            // <Inquiry data={item}/>
            <tr>
                <td className='id-td'>{item.id}</td>
                {/* <td className='id-td'>{index+1}</td> */}
                <Link to={'/inquirylist/'+item.id}>
                    <td className='title-td'>[{item.type}] {item.title}</td>
                </Link>
                <td className='writer-td'>{item.writer}</td>
                <td className='date-td'>{item.date}</td>
            </tr>
        )
        )
    

    return (
        <div className='outer-div'>
            <h1>자주하는 질문</h1>
            <div className='btn-wrap'>
                <Link to='writepost'>
                    <button className='inquiry-btn'>글 작성</button>
                </Link>
            </div>
            
            <div className="list-div">
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        </div>


    );
}

export default InquiryList;
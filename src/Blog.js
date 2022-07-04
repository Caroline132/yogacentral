import {useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';

const Blog = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('/api/blogs')
            .then(res => res.json())
            .then(json => setBlogs(json.blogs))
            .catch(err => console.log(err))
    },[])

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();
  
    const handleSubmit = async () => {
      const blog = { title, body, author };
  
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      })
      const json = await res.json()
      setBlogs([...blogs, json.blog])
      setTitle('')
      setAuthor('')
      setBody('')
      setShow(false)
    }
  
    return (
      <div className="blog">
        <div className="create">
        <Container type="submit" className = "pt-5">
            <div className="blog-pop-overlap-group blog-pop-rectangle">
                <div className="blog-pop-add text-center" onClick={handleShow}><BsPencilSquare /> Add Blog</div>
            </div>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Container className = "results-container p-5 pt-4">
            <div className="form-title text-md-start">Add a New Blog</div>
            <Form className="form">
                <Row>
                    <Col>
                        <Form.Group className="mb-3 py-2" controlId="formBasicEmail1">
                            <Form.Label className="align-items-start">Blog title:</Form.Label>
                            <Form.Control type="name" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3 py-2" controlId="formBasicEmail1">
                            <Form.Label className="align-items-start">Blog author:</Form.Label>
                            <Form.Control type="author" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3 py-2" controlId="formBasicEmail1">
                    <Form.Label>Blog content:</Form.Label>
                    <Form.Control type="body" placeholder="Start Writing" value={body} onChange={(e) => setBody(e.target.value)} as="textarea" rows={3} />
                </Form.Group>
                <Container type="submit" className = "blog-results-inner pt-2">
                    <div className="blog-overlap-group blog-rectangle">
                        <div className="blog-add text-center" onClick={handleSubmit}>Add Blog</div>
                    </div>
                </Container>
            </Form>
            </Container>
        </Modal>
        </div>
        <div className="container pt-4">
            <div className="row justify-content-center">
                <div className="col">
                    {blogs?.length > 0 ? (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>body</th>
                                    <th>author</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map(({id, title, body, author}) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{title}</td>
                                        <td>{body}</td>
                                        <td>{author}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No Blogs</p>
                    )}
                </div>
            </div>
        </div>
      </div>
    );
  }
   
  export default Blog;
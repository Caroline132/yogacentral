import {useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Modal, Button, Collapse } from 'react-bootstrap';
import { BsPencilSquare } from 'react-icons/bs';
import { useTranslation } from "react-i18next";
import fries from './img/fries2.svg';
import text from './img/text3.png';

const Blog = () => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

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

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else{
            submit();
        }
        setValidated(true);
    }
  
    const submit = async () => {
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
        <div className="container pt-2 px-5">
            <div className="row justify-content-center">
                <div className="col px-5">
                    <table className="table mb-3 mt-3">
                        <thead>
                        <h3 className="post-title">{t("recommended")}</h3>
                        </thead>
                        <tbody className="justify-content-center align-items-center">
                            <Container className = "px-5">
                            <Row className="justify-content-md-center align-items-center pl-4 pt-3">
                                <Col className="text-center d-none d-lg-block">
                                    {/* image source https://unsplash.com/photos/Lbu6luIw3g8 */}
                                    <img
                                        src={fries}
                                        className="fries d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />          
                                </Col>
                                <Col lg={10} className="text-start">
                                    <div className="post-preview">
                                        <a onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open} >
                                            <h2 className="post-title">Are fries the next superfood?</h2>
                                            <h3 className="post-subtitle">Everyone loves fries, but most people assume that they are bad for you. But wait! They might be healthier than you thought.</h3>
                                        </a>
                                        <p className="post-meta">
                                        {t("postedBy")} Chris
                                        </p>
                                    </div>
                                    <Collapse in={open}>
                                    <div id="example-collapse-text">
                                    A research group in Belgium have found that a daily meal of fies might be healthy as potatoes are packed with vitamins and fiber, which can aid in digestion and also provides essential nutrients.
                                    </div>
                                    </Collapse>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center align-items-center pl-4 pt-3">
                                <Col className="text-center d-none d-lg-block">
                                    {/* image source https://unsplash.com/photos/iIn8IKBOva0 */}
                                    <img
                                        src={text}
                                        className="fries d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />          
                                </Col>
                                <Col lg={10} className="text-start">
                                    <div className="post-preview">
                                        <a onClick={() => setOpen2(!open2)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open2} >
                                            <h2 className="post-title">You can lose weight by texting!</h2>
                                            <h3 className="post-subtitle">Have you tried different excercises but you just don't like it? There might be an easy solution to your quest to get in shape.</h3>
                                        </a>
                                        <p className="post-meta">
                                        {t("postedBy")} Helen
                                        </p>
                                    </div>
                                    <Collapse in={open2}>
                                    <div id="example-collapse-text">
                                    Texting has always been assumed to be unhealthy as it provides harsh blue
                                    light and it can lead to hand strain. However, if done for 30 minutes every 
                                    day, you can lose up to 100 calories. So go on an continue texting!
                                    </div>
                                    </Collapse>
                                </Col>
                            </Row>
                            </Container>
                        </tbody>
                    </table>
                    {blogs?.length > 0 ? (
                        
                        <table className="table">
                            <thead>
                            <Row>
                            <Col md="auto">
                            <h3 className="">{t("myBlogs")}</h3>
                            </Col>
                            <Col md="auto">
                            <Container type="submit" className = "">
                                <div className="blog-pop-overlap-group blog-pop-rectangle">
                                    <div className="blog-pop-add text-center" onClick={handleShow}><BsPencilSquare /> {t("addBlog")}</div>
                                </div>
                            </Container>
                            <Modal show={show} onHide={handleClose}>
                                <Container className = "results-container p-5 pt-4">
                                <div className="form-title text-md-start">{t("addBlog")}</div>
                                <Form className="form" noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3 py-2" controlId="formBasicEmail1">
                                                <Form.Label className="align-items-start">{t("title")}</Form.Label>
                                                <Form.Control type="name" placeholder={t("title")} value={title} onChange={(e) => setTitle(e.target.value)} required/>
                                                <Form.Control.Feedback type="invalid">
                                                {t("blogTitleError")}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3 py-2" controlId="formBasicEmail1">
                                                <Form.Label className="align-items-start">{t("author")}</Form.Label>
                                                <Form.Control type="author" placeholder={t("author")} value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                                                <Form.Control.Feedback type="invalid">
                                                {t("blogAuthorError")}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3 py-2" controlId="formBasicEmail1">
                                        <Form.Label>{t("content")}</Form.Label>
                                        <Form.Control type="body" placeholder={t("startWrite")} value={body} onChange={(e) => setBody(e.target.value)} as="textarea" rows={3} required/>
                                        <Form.Control.Feedback type="invalid">
                                        {t("blogContentError")}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Container className = "text-center">
                                    <Button className = "text-center results-button mt-4" type="submit">{t("submit")}</Button>
                                    </Container>
                                </Form>
                                </Container>
                            </Modal>
                            </Col>
                            </Row>
                            </thead>
                            <tbody className="justify-content-center align-items-center mb-0">
                                
                                {blogs.map(({id, title, body, author}) => (
                                    <Container className = "">
                                    <Row className="">
                                        <Col md="auto" className="text-start">
                                            <div className="post-preview-2">
                                                <h2 className="post-title-2">{title}</h2>
                                                <h3 className="post-subtitle-2">{body}</h3>
                                                <p className="post-meta-2">
                                                {t("postedBy")} {author}
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    </Container>
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
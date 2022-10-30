import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
  return (
    <div className='container'>
      <h2> Blogs</h2>
      <br />

      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            <span className='fs-6 fw-bold'>
              Question No 01: What is `cors`?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <span className='fs-5 fw-bold'>Answer: </span> CORS stands for
            Cross-Origin Resource Sharing. Which on allows a browser to make
            requests to the server deployed at a different domain, like back-end
            data shown to Front-end UI. <br />
            Also, we know CORS is an HTTP-header-based mechanism that allows a
            server to indicate any origins (domain, scheme, or port) other than
            its own from which a browser should permit loading resources.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            <span className='fs-6 fw-bold'>
              Question No 02: Why are you using `firebase`? What other options
              do you have to implement authentication?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <span className='fs-5 fw-bold'>Answer: </span> We are using Firebase
            not only for authentication but also for database, cloud storage,
            cloud messaging, and remote config that performs A/B testing on the
            go firebase has great features. That's why we are using firebase.{' '}
            <br />
            Without firebase, we also implement authentication by Auth0, Okta,
            Passport, Onelogin, JumoCloud, Microsoft Azure Active Directory,
            MongoDB, Amazon Cognito JSON Web Token, Back4app etc.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='2'>
          <Accordion.Header>
            <span className='fs-6 fw-bold'>
              Question No 03: How does the private route work?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <span className='fs-5 fw-bold'>Answer: </span>The private route
            component is used to protect selected pages in a React app from
            unauthenticated users. <br />
            The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return URL passed in the
            location state property.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='3'>
          <Accordion.Header>
            <span className='fs-6 fw-bold'>
              Question No 04: What is Node? How does Node work?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <span className='fs-5 fw-bold'>Answer: </span>
            We are known Node.js is an open-source, cross-platform JavaScript
            runtime environment. Not only that but also have more
            functionalities. <br />
            It is used for server-side programming, and primarily deployed for
            non-blocking, event-driven servers, such as traditional websites and
            back-end API services, but was originally designed with real-time,
            push-based architectures in mind. Every browser has its own version
            of a JS engine and node. <br />
            It is a used as backend service where javascript works on the server
            side of the application. This way javascript is used on both the
            front-end and back-end. Node. js runs on the chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. <br />
            Node.js achieves low latency and high throughput by taking a
            “non-blocking” approach to serving requests. In other words, Node.
            js wastes no time or resources waiting for I/O requests to return.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;

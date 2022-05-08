import React from "react";
import { Table } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container">
        <div className="text-start">
        <h5 className="text-warning text-start">1: What is the purpose of jwt and how does it work ?</h5>
        <p><u><strong>JWT, or JSON Web Token,</strong></u> is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        <article>
        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
        <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
        </article>
        <article>
            <p> Once decoded, you will get two JSON strings:
                <ul>
                    <li>The header and the payloadr</li>
                    <li>The signature. </li>
                </ul>
            </p>
            <article>
            <em>
            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
            </em>
           <article>
           <strong>
            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. 
            </strong>
           </article>
          
           <em>
            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
            </em>
           </article>

        </article>
        </div>

         {/* 2nd question & Answer */}
         <div>
         <h5 className="text-warning text-start">2. What is the Difference between javascript and nodejs ?</h5>
      <Table striped bordered>
        <thead>
          <tr>
            <th>SN</th>
            <th>Javascript</th>
            <th>Node.Js</th>
          </tr>
        </thead>
        <tbody className="text-start">
          <tr>
            <td>1</td>
            <td>
              Javascript is a programming language that is used for writing
              scripts on the website.{" "}
            </td>
            <td>NodeJS is a Javascript runtime environment.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Javascript can only be run in the browsers.</td>
            <td>
              We can run Javascript outside the browser with the help of NodeJS.
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>It is basically used on the client-side.</td>
            <td>It is mostly used on the server-side.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Javascript can run in any browser engine</td>
            <td>It run only by V8 javascript engine.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              It is the upgraded version of ECMA script that uses Chrome’s V8
              engine written in C++.{" "}
            </td>
            <td>Nodejs is written in C, C++ and Javascript.</td>
          </tr>
        </tbody>
      </Table>
         </div>
        {/* 3rd Question */}
        <div>
        <h5 className="text-warning text-start">3.Differences between sql and nosql databases. ?</h5> 
        </div>
    </div>
  );
};

export default Blog;

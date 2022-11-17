import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function CategoryBar() {
    return (
        <>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/category/c1" className="text-black"><Button variant="outline-primary">디자인문구</Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c2" className="text-black"><Button variant="outline-primary">디지털/핸드폰</Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c3" className="text-black"><Button variant="outline-primary">가구/수납</Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c4" className="text-black"><Button variant="outline-primary">데코/조명</Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c5" className="text-black"><Button variant="outline-primary">키친</Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c6" className="text-black"> <Button variant="outline-primary">패션의류</Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c7" className="text-black"><Button variant="outline-primary">뷰티</Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c8" className="text-black"><Button variant="outline-primary">주얼리/시계</Button></Nav.Link>
          </Nav.Item>
        </Nav>
      </>
      );
}

export default CategoryBar;
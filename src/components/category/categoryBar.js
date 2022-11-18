import Nav from 'react-bootstrap/Nav';

function CategoryBar() {
    return (
      <>
        <Nav justify variant="tabs" className="justify-content-center p-1 bg-light">
          <Nav.Item>
            <Nav.Link href="/category/c1" className="text-black">디자인문구</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c2" className="text-black">디지털/핸드폰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c3" className="text-black">가구/수납</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c4" className="text-black">데코/조명</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c5" className="text-black">키친</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c6" className="text-black">패션잡화</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c7" className="text-black">뷰티</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/c8" className="text-black">주얼리/시계</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
      );
}

export default CategoryBar;
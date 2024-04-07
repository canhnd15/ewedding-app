import Heading from "../components/Heading";
import Row from "../components/Row";
import GuestLayout from "../features/guests/GuestLayout";
import GuestTable from "../features/guests/GuestTable";
import GuestTableOperations from "../features/guests/GuestTableOperations";
import Button from "../components/Button";

function Guests() {
  return (
    <>
      <Row type="horizontal">
        <Heading>KHÁCH MỜI:</Heading>
        <Heading>
          <span style={{ color: "#b91c1c" }}>140</span>
        </Heading>
      </Row>
      <Row>
        <GuestLayout />
        <Row type="horizontal">
          <Button>Mời thêm</Button>
          <GuestTableOperations />
        </Row>
        <GuestTable />
      </Row>
    </>
  );
}

export default Guests;

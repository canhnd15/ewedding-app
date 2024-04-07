import Menus from "../../components/Menus";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import GuestRow from "./GuestRow";

const guests = [
  {
    stt: 1,
    name: "Nguyen Van A",
    nickname: "A cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 2,
    name: "Nguyen Van B",
    nickname: "B cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 3,
    name: "Nguyen Van C",
    nickname: "C cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 1,
    name: "Nguyen Van A",
    nickname: "A cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 2,
    name: "Nguyen Van B",
    nickname: "B cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 3,
    name: "Nguyen Van C",
    nickname: "C cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 1,
    name: "Nguyen Van A",
    nickname: "A cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 2,
    name: "Nguyen Van B",
    nickname: "B cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 3,
    name: "Nguyen Van C",
    nickname: "C cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 1,
    name: "Nguyen Van A",
    nickname: "A cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 2,
    name: "Nguyen Van B",
    nickname: "B cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 3,
    name: "Nguyen Van C",
    nickname: "C cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
];

function GuestTable() {
  return (
    <Menus>
      <Table columns="0.6fr 1fr 1fr 1fr 1fr 3.2rem">
        <Table.Header>
          <div>STT</div>
          <div>Tên</div>
          <div>Tên gọi</div>
          <div>SĐT</div>
          <div>Địa chỉ</div>
          <div>Ghi chú</div>
        </Table.Header>

        <Table.Body
          data={guests}
          render={(guest) => <GuestRow key={guest.stt} guest={guest} />}
        />
        <Table.Footer>
          <Pagination count={guests.length} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default GuestTable;

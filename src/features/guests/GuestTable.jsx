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
    stt: 4,
    name: "Nguyen Van A",
    nickname: "A cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 5,
    name: "Nguyen Van B",
    nickname: "B cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 6,
    name: "Nguyen Van C",
    nickname: "C cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 7,
    name: "Nguyen Van A",
    nickname: "A cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 8,
    name: "Nguyen Van B",
    nickname: "B cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 9,
    name: "Nguyen Van C",
    nickname: "C cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 10,
    name: "Nguyen Van A",
    nickname: "A cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 11,
    name: "Nguyen Van B",
    nickname: "B cay",
    phone: "0357664013",
    address: "Hanoi",
    note: "Noooo",
  },
  {
    stt: 12,
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
      <Table columns="0.1fr 0.5fr 0.5fr 0.3fr 0.8fr 1rem 1rem">
        <Table.Header>
          <div>STT</div>
          <div>Tên</div>
          <div>Tên gọi</div>
          <div>SĐT</div>
          <div>Địa chỉ</div>
          <div>Ghi chú</div>
          <div></div>
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

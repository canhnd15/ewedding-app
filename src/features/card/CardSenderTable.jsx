import styled from "styled-components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGuests } from "../guests/useGuests";

import Table from "../../components/Table";
import CardSenderTableRow from "./CardSenderTableRow";
import Spinner from "../../components/Spinner";
import Input from "../../components/SearchInput";
import Row from "../../components/Row";

const TableBlock = styled.div`
  padding-right: 20px;
`;

function CardSenderTable({ userId }) {
  const { t } = useTranslation();
  const { guests, isLoading: isLoadingGuests } = useGuests(userId, true);
  const [displayedGuests, setDisplayedGuests] = useState(null);

  if (isLoadingGuests) return <Spinner />;

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "" || searchValue === undefined)
      setDisplayedGuests(null);

    const searchGuests = guests
      .slice()
      .filter((guest) =>
        guest.name.toLowerCase().includes(searchValue.toLowerCase())
      );

    setDisplayedGuests(searchGuests);
  };

  return (
    <TableBlock>
      <Row>
        <Input
          onChange={(e) => handleSearch(e)}
          placeholder={`${t("guestSearchPlaceholder")}`}
        />
        <Table columns={"25px 160px 70px"}>
          <Table.Header>
            <div></div>
            <div>{t("guestInviteMoreFormName")}</div>
            <div>{t("isInvited")}</div>
          </Table.Header>
          <Table.Body
            data={displayedGuests !== null ? displayedGuests : guests}
            render={(guest) => (
              <CardSenderTableRow key={guest.id} guest={guest} />
            )}
          ></Table.Body>
        </Table>
      </Row>
    </TableBlock>
  );
}

export default CardSenderTable;

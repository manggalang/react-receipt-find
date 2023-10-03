import { Outlet, useNavigation } from "react-router-dom";
import { AppShell, Container, LoadingOverlay } from "@mantine/core";

import { HeaderSimple } from "../components/HeaderSimple";
import { FooterSimple } from "../components/FooterSimple";

export default function DefaultLayout() {
  const navigation = useNavigation();
  return (
    <>
      <LoadingOverlay
        visible={navigation.state === "loading"}
        overlayBlur={2}
      />
      <AppShell>
        <HeaderSimple />
        <Container size="xl">
          <Outlet />
        </Container>
        <FooterSimple />
      </AppShell>
      ;
    </>
  );
}

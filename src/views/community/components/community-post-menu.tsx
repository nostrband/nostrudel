import { MenuItem, useToast } from "@chakra-ui/react";
import { nip19 } from "nostr-tools";

import { CustomMenuIconButton, MenuIconButtonProps } from "../../../components/menu-icon-button";
import { NostrEvent } from "../../../types/nostr-event";
import { CopyToClipboardIcon } from "../../../components/icons";
import CopyShareLinkMenuItem from "../../../components/common-menu-items/copy-share-link";
import OpenInAppMenuItem from "../../../components/common-menu-items/open-in-app";
import DeleteEventMenuItem from "../../../components/common-menu-items/delete-event";
import DebugEventMenuItem from "../../../components/debug-modal/debug-event-menu-item";

export default function CommunityPostMenu({
  event,
  approvals,
  ...props
}: Omit<MenuIconButtonProps, "children"> & { event: NostrEvent; approvals: NostrEvent[] }) {
  const toast = useToast();

  return (
    <>
      <CustomMenuIconButton {...props}>
        <OpenInAppMenuItem event={event} />
        <CopyShareLinkMenuItem event={event} />
        <MenuItem
          onClick={() => {
            const text = nip19.noteEncode(event.id);
            if (navigator.clipboard) navigator.clipboard.writeText(text);
            else toast({ description: text, isClosable: true, duration: null });
          }}
          icon={<CopyToClipboardIcon />}
        >
          Copy Note ID
        </MenuItem>
        <DeleteEventMenuItem event={event} label="Delete Post" />
        <DebugEventMenuItem event={event} />
      </CustomMenuIconButton>
    </>
  );
}

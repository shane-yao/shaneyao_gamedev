import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComment() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
        repo="shane-yao/shaneyao"
        repoId="R_kgDOOJe6KQ"
        category="Announcements"
        categoryId="DIC_kwDOOJe6Kc4Cpx_Z"
        mapping="title"
        strict="0"
        reactions-enabled="1"
        emitMetadata="0"
        input-position="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
    />
  );
}
import { Container, Group, ActionIcon, rem, Avatar } from '@mantine/core';
import { IconBrandLinkedin, IconBrandYoutube, IconBrandGithub } from '@tabler/icons-react';
import Logo from '../../assets/logotransparent.png';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Avatar src={Logo} size={60} />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle" component="a"
            href="https://linkedin.com/in/alan-sandoval"
            aria-label="Open LinkedIn">
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle"
            component='a'
            href="https://www.youtube.com/@BigAl404260"
            aria-label="Open YouTube">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle"
            component='a'
            href='https://github.com/SuperCoolAlan'
            aria-label='Open GitHub'>
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div >
  );
}

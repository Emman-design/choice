import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

import { useRef, useState } from 'react';
import { socials } from '../../utils/socials';
import { bio } from '../../utils/about';
import { education } from '../../utils/education';
import { publications } from '../../utils/publications';
import { teachingHistory } from '../../utils/teaching';
import { services } from '../../utils/services';

const Home = () => {
  // Menu toggle
  const [showNav, setShowNav] = useState(false);

  // Nav Refs
  const educationRef = useRef(null);
  const publicationsRef = useRef(null);
  const teachingRef = useRef(null);
  const projectsRef = useRef(null);

  // Navigation
  const navigationHandler = ref => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box>
      {/* Navbar */}
      <Box bgColor="gray.200" py=".3em">
        <Container maxW="container.xl" mx="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems={['flex-start', 'center']}
          >
            <Box flexGrow={1} display={[showNav ? 'block' : 'none', 'flex']}>
              <Box my={['0.2em', '0em']} py={['0.2em', '0em']}>
                <Link href="/" pr="1em" mr=".5em" _dark={{ color: '#000' }}>
                  Home
                </Link>
              </Box>

              <Box my={['0.2em', '0em']} py={['0.2em', '0em']}>
                <Link
                  href="#"
                  onClick={() => navigationHandler(educationRef.current)}
                  pr="1em"
                  mr=".5em"
                  _dark={{ color: '#000' }}
                >
                  Education
                </Link>
              </Box>

              <Box my={['0.2em', '0em']} py={['0.2em', '0em']}>
                <Link
                  href="#"
                  onClick={() => navigationHandler(publicationsRef.current)}
                  pr="1em"
                  mr=".5em"
                  _dark={{ color: '#000' }}
                >
                  Publications
                </Link>
              </Box>

              <Box my={['0.2em', '0em']} py={['0.2em', '0em']}>
                <Link
                  href="#"
                  onClick={() => navigationHandler(teachingRef.current)}
                  pr="1em"
                  mr=".5em"
                  _dark={{ color: '#000' }}
                >
                  Teaching
                </Link>
              </Box>

              <Box my={['0.2em', '0em']} py={['0.2em', '0em']}>
                <Link
                  href="#"
                  onClick={() => navigationHandler(projectsRef.current)}
                  pr="1em"
                  mr=".5em"
                  _dark={{ color: '#000' }}
                >
                  Projects
                </Link>
              </Box>
            </Box>

            <Box ml="auto">
              <Box
                display={['flex', 'none']}
                pr=".5em"
                justifyContent="flex-end"
              >
                {showNav ? (
                  <CloseIcon
                    onClick={() => setShowNav(false)}
                    fontSize="1.6em"
                    pt=".4em"
                    _dark={{ color: '#000' }}
                  />
                ) : (
                  <HamburgerIcon
                    fontSize="1.5em"
                    _dark={{ color: '#000' }}
                    onClick={() => setShowNav(true)}
                  />
                )}
              </Box>
              <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main */}
      <main>
        <Container
          maxW="container.xl"
          mx="auto"
          display="flex"
          flexDirection={['column-reverse', 'row']}
          justifyContent="space-between"
        >
          {/* Sidebar */}
          <Box width={['100%', '25%']}>
            <Heading
              my=".6em"
              fontSize={['1.5em', '1.5em', '2em']}
              fontWeight="bold"
            >
              Emmanuel Akoja
            </Heading>
            <Image
              src="/images/choice.jpeg"
              borderRadius="0.4em"
              width={['100%', '95%', '90%']}
            />
            <Text my=".6em">
              P.hD. Student of Computer Science Louisiana State University
            </Text>

            <Flex>
              {socials.map((media, i) => {
                return (
                  <Link key={i} href={media.link} isExternal>
                    <Image
                      src={media.icon}
                      mr="1em"
                      width="22px"
                      height="22px"
                    />
                  </Link>
                );
              })}
            </Flex>
          </Box>

          {/* Main Inner Section */}

          <Box width={['100%', '73%']} pt={['1em', '5em']}>
            <Heading fontSize={['1.3em', '1.5em', '1.7em']} fontWeight="bold">
              About me
            </Heading>
            <Text my="1em">{bio}</Text>
            <Box width="100%" height="1px" my="1.5em" bgColor="gray.400"></Box>

            <Heading
              fontSize={['1.3em', '1.5em', '1.7em']}
              fontWeight="bold"
              mb=".8em"
              ref={educationRef}
            >
              Education
            </Heading>
            {education.map((deg, i) => {
              return (
                <Box key={i} my=".8em">
                  <Heading fontSize="1em" fontWeight="bold">
                    {deg.degree}
                  </Heading>
                  <Text my=".2em">{deg.from}</Text>
                </Box>
              );
            })}
            <Box width="100%" height="1px" my="1.5em" bgColor="gray.400"></Box>

            <Heading
              fontSize={['1.3em', '1.5em', '1.7em']}
              fontWeight="bold"
              mb=".8em"
              ref={publicationsRef}
            >
              Publication
            </Heading>

            {publications.map((pub, i) => {
              return (
                <Box key={i} my=".8em">
                  <Flex>
                    <Heading fontSize="1em" fontWeight="bold">
                      {pub.title}
                    </Heading>
                    <Link href={pub.link} color="blue.400" isExternal>
                      {'   '}
                      [Link]
                    </Link>
                  </Flex>
                  <Text my=".2em">{pub.base}</Text>
                </Box>
              );
            })}

            <Box width="100%" height="1px" my="1.5em" bgColor="gray.400"></Box>

            <Heading
              fontSize={['1.3em', '1.5em', '1.7em']}
              fontWeight="bold"
              mb=".8em"
              ref={teachingRef}
            >
              Teaching
            </Heading>

            {teachingHistory.map((history, i) => {
              return (
                <Box key={i} my=".8em">
                  <Heading fontSize="1em" fontWeight="bold" mb=".3em">
                    {history.title}
                  </Heading>
                  <UnorderedList>
                    {history.levels.map((level, i) => {
                      return <ListItem key={i}>{level}</ListItem>;
                    })}
                  </UnorderedList>
                </Box>
              );
            })}
            <Box width="100%" height="1px" my="1.5em" bgColor="gray.400"></Box>

            <Heading
              fontSize={['1.3em', '1.5em', '1.7em']}
              fontWeight="bold"
              mb=".8em"
              ref={projectsRef}
            >
              Professional Services
            </Heading>

            {services.map((service, i) => {
              return (
                <Box key={i} my=".8em">
                  <Heading fontSize="1em" fontWeight="bold" mb=".3em">
                    {service.title}
                  </Heading>
                  <UnorderedList>
                    {service.levels.map((level, i) => {
                      return <ListItem key={i}>{level}</ListItem>;
                    })}
                  </UnorderedList>
                </Box>
              );
            })}
          </Box>
        </Container>
      </main>
    </Box>
  );
};

export default Home;

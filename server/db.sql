--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: events; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.events (
    id integer NOT NULL,
    title character varying(255),
    details character varying(255),
    venue character varying(255),
    extras character varying(255)
);


--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO events (id, title, details, venue, extras)
VALUES 
    (1, 'Princess GAGA: The MAYHEM EXPERIENCE!', 'A DISCO-POP DANCE PARTY + IMMERSIVE DRAG SPECTACULAR!', 'OASIS', NULL),
    (2, 'AI Dev 25 - The AI Developer Conference', 'Celebrate Pi Day with us! Join us for a day of coding, learning, and connecting to build AI applications with your fellow developers!', 'Shack15', NULL),
    (3, 'BikeandBrew', 'meet at a park and bike around the city. All levels welcome!', 'Presidio', NULL),
    (4, 'Indie BYOG Showcase', 'The 3rd annual Indie BYOG showcase! Join us for a chill night of indie game demos & networking ', 'BuzzWorks', NULL),
    (5, 'Code Meets Culture: Engineering the Next Generation of Inclusive Tech', 'Join us for an impactful, multi-session workshop that addresses the critical intersection of culture and technology.', 'online', NULL);


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

-- SELECT pg_catalog.setval('public.events_id_seq', 1, false);


--
-- Name: students events_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);

--
-- PostgreSQL database dump complete
--
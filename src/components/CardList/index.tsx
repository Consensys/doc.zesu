import React from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export interface CardItem {
  href: string;
  title: string;
  description: string;
}

interface CardListProps {
  items: CardItem[];
}

export default function CardList({ items }: CardListProps): JSX.Element {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.href} className={styles.item}>
          <Link to={item.href} className={styles.card}>
            <Heading as="h3" className={styles.title}>{item.title}</Heading>
            <p className={styles.description}>{item.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

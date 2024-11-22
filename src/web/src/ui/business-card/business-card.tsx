import "@ui/business-card/business-card.css";
import { useMemo } from "react";

export interface BuisinessCardProps {
  logo: string;
  name: string;
  title: string;
  country: string;
  address: string;
  phone: string;
  url: string;
  description: string;
  joined: string;
}

export const BusinessCard = ({
  logo = "./logo-straight-big-gold.svg",
  name = "No name",
  title = "No title",
  country = "No country",
  address = "No address",
  phone = "000-0000-0000",
  url = "https://sssss",
  description = "",
  joined = "",
}: BuisinessCardProps) => {
  // 770 1340 = 300 520

  // TODO: Generate QRCODE by url
  const qrcode = logo;

  const upperName = useMemo(() => name.toUpperCase(), [name]);

  const upperTitle = useMemo(() => title.toUpperCase(), [name]);

  const upperCountry = useMemo(() => country.toUpperCase(), [name]);

  const upperAddress = useMemo(() => address.toUpperCase(), [name]);

  const upperDescription = useMemo(() => description.toUpperCase(), [name]);

  const upperJoined = useMemo(() => joined.toUpperCase(), [name]);

  return (
    <div className="business-card grid grid-cols-2 text-black w-auto">
      <div className="front m-auto">
        <div className="card shadow-drop-center slide-top">
          <div className="block-1">
            <div className="logo">
              <img src={logo} alt={logo} />
            </div>
            <div className="name">
              <p>{upperName}</p>
            </div>
          </div>
          <div className="block-2">
            <div className="title">
              <p>{upperTitle}</p>
            </div>
            <div className="address">
              <p className="country">{upperCountry}</p>
              <p className="address">{upperAddress}</p>
              <p className="phone">{phone}</p>
            </div>
            <div className="url">
              <p>{url}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="back m-auto">
        <div className="card shadow-drop-center slide-top">
          <div className="block-3">
            <div className="block-3-inner">
              <div className="qrcode">
                <img src={qrcode} alt={qrcode} />
              </div>
              <div className="description">
                <p>{upperDescription}</p>
              </div>
            </div>
            <div className="joined">
              <p>{upperJoined}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

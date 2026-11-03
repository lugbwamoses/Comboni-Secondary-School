import React from 'react';
import mapPin from '../../../Glow Icons v1.0/Outline/map-pin-outline.svg?raw';
import mail from '../../../Glow Icons v1.0/Outline/mail-outline.svg?raw';
import phone from '../../../Glow Icons v1.0/Outline/phone-outline.svg?raw';
import search from '../../../Glow Icons v1.0/Outline/search-outline.svg?raw';
import chevronDown from '../../../Glow Icons v1.0/Outline/chevron-down-outline.svg?raw';
import menu from '../../../Glow Icons v1.0/Outline/menu-outline.svg?raw';
import close from '../../../Glow Icons v1.0/Outline/xmark-outline.svg?raw';
import bookOpen from '../../../Glow Icons v1.0/Outline/book-open-outline.svg?raw';
import users from '../../../Glow Icons v1.0/Outline/users-outline.svg?raw';
import check from '../../../Glow Icons v1.0/Outline/checkmark-circle-outline.svg?raw';
import star from '../../../Glow Icons v1.0/Outline/star-outline.svg?raw';
import flame from '../../../Glow Icons v1.0/Outline/flame-outline.svg?raw';
import logIn from '../../../Glow Icons v1.0/Outline/log-in-outline.svg?raw';
import compass from '../../../Glow Icons v1.0/Outline/compass-outline.svg?raw';
import calendar from '../../../Glow Icons v1.0/Outline/calendar-outline.svg?raw';
import clock from '../../../Glow Icons v1.0/Outline/clock-outline.svg?raw';
import arrowRight from '../../../Glow Icons v1.0/Outline/arrow-right-outline.svg?raw';
import shield from '../../../Glow Icons v1.0/Outline/shield-outline.svg?raw';
import download from '../../../Glow Icons v1.0/Outline/download-cloud-outline.svg?raw';
import file from '../../../Glow Icons v1.0/Outline/doc-outline.svg?raw';
import help from '../../../Glow Icons v1.0/Outline/question-circle-outline.svg?raw';
import externalLink from '../../../Glow Icons v1.0/Outline/external-link-outline.svg?raw';
import chevronRight from '../../../Glow Icons v1.0/Outline/chevron-right-outline.svg?raw';
import share from '../../../Glow Icons v1.0/Outline/share-2-outline.svg?raw';
import layout from '../../../Glow Icons v1.0/Outline/layout-outline.svg?raw';
import medal from '../../../Glow Icons v1.0/Outline/medal-outline.svg?raw';

const makeIcon = (icon) => {
  const markup = icon
    .replaceAll('fill="black"', 'fill="currentColor"')
    .replace('<svg width="24" height="24"', '<svg width="100%" height="100%"');

  return function GlowIcon({ size = 20, className = '' }) {
    return (
      <span
        className={className}
        aria-hidden="true"
        style={{ width: size, height: size, display: 'inline-flex', flexShrink: 0, lineHeight: 0 }}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    );
  };
};

export const MapPin = makeIcon(mapPin);
export const Mail = makeIcon(mail);
export const Phone = makeIcon(phone);
export const PhoneCall = Phone;
export const Search = makeIcon(search);
export const ChevronDown = makeIcon(chevronDown);
export const Menu = makeIcon(menu);
export const X = makeIcon(close);
export const GraduationCap = makeIcon(bookOpen);
export const Award = makeIcon(medal);
export const BookOpen = makeIcon(bookOpen);
export const Users = makeIcon(users);
export const Building = makeIcon(layout);
export const CheckCircle2 = makeIcon(check);
export const Star = makeIcon(star);
export const Sparkles = makeIcon(flame);
export const LogIn = makeIcon(logIn);
export const Globe = makeIcon(compass);
export const Calendar = makeIcon(calendar);
export const Clock = makeIcon(clock);
export const ArrowRight = makeIcon(arrowRight);
export const Facebook = makeIcon(share);
export const Twitter = makeIcon(share);
export const Instagram = makeIcon(share);
export const Linkedin = makeIcon(share);
export const ShieldCheck = makeIcon(shield);
export const Download = makeIcon(download);
export const FileText = makeIcon(file);
export const HelpCircle = makeIcon(help);
export const ExternalLink = makeIcon(externalLink);
export const ChevronRight = makeIcon(chevronRight);
export const Share = makeIcon(share);

import type {ComponentProps}from 'react'
import { motion } from "framer-motion";

type LogoProps = ComponentProps<typeof motion.svg>

export default function Logo(props: LogoProps) {
  return (
    <motion.svg viewBox="0 0 195 25" fill="currentColor" {...props}>
      <path d="M1.943 5.467c0-.794.747-1.214 1.54-1.214 1.097 0 5.157 1.307 7.35 1.587v2.87l-1.517 1.54 1.517 1.54v3.967a5.73 5.73 0 01-2.59.606 5.254 5.254 0 01-3.71-1.493l4.13-1.727V6.05L3.53 8.243c.723-1.586 1.936-2.496 2.356-2.753l-.233-.35C2.2 5.723.146 8.78.146 11.65c0 4.317 3.664 7.28 7.467 7.28 3.78 0 6.767-2.847 6.767-6.393v-.234h-.444c-.466 1.167-1.306 2.31-2.45 3.08v-3.57l1.564-1.563-1.564-1.563v-2.8h.024c1.703 0 3.173-.91 3.173-2.59 0-1.704-1.703-2.894-3.896-2.73v.443c.723.093 1.796.21 1.796 1.027 0 .513-.49.746-.98.746-2.147 0-5.227-1.656-7.21-1.656C2.13 1.127.706 2.573.706 4.253c0 1.214.724 2.077 1.587 2.45l.233-.326a.968.968 0 01-.583-.91zm1.26 3.57l2.45-1.027v5.717l-1.54.653c-.747-.957-1.167-2.193-1.167-3.477 0-.676.094-1.306.257-1.866z" />
      <path d="M18.709 16.223V10.46l1.283-1.213 1.4 1.166v5.927c0 2.427-.84 4.69-2.566 4.69v.56c.233.023.466.047.723.047 4.06 0 4.853-2.894 4.853-5.297V9.69l1.003-.817-.396-.513-.933.747-2.474-2.054-2.893 2.73V1.127h-.444L14.462 3.81v.327c1.12.35 1.12.863 1.12 1.236V15.99l-1.587 1.003.42.537.887-.56 2.404 2.053 2.893-2.03-.42-.513-.723.49-.747-.747z" />
      <path d="M24.826 17.507l1.027-.84 3.477 2.566 4.806-3.896-.35-.56-2.566 2.006-2.8-1.913v-1.003l5.04-3.127v-.117l-2.357-3.57-5.577 2.894v6.16l-1.12.886.42.514zm3.594-4.434v-3.99l.443-.256 1.913 2.753-2.356 1.493zM40.49 11.627c0-.584.538-.747 1.144-.747h.257v3.827h-.023c-1.937 0-3.524 1.26-3.524 3.15 0 2.076 1.844 3.22 3.477 2.94l.117-.42c-.817.07-1.564-.49-1.564-1.284 0-.676.537-1.096 1.19-1.096.864 0 1.494.536 1.937 1.003l3.01-3.337-.327-.326-.793.886a5.055 5.055 0 00-2.847-1.47V5.467c.047.093.117.186.187.303L50.548 19h.886V5.28c1.587-.117 2.964-1.167 2.964-2.777 0-.396-.094-.793-.28-1.166h-.327c-.07.7-.63 1.236-1.4 1.236-.84 0-1.447-.513-1.82-1.003l-.467-.023-2.893 3.36.327.35.886-1.004c.56.537 1.377.957 2.357 1.027v7.7L45.158 3.6c-.607-1.073-1.237-2.287-2.94-2.287-1.61 0-2.917 1.4-2.917 3.08 0 .21.023.444.07.654l.443.093c0-.793.374-1.237 1.027-1.237.35 0 .7.257 1.05.654v3.15h-.047c-1.54 0-2.8 1.166-2.8 2.636a2.23 2.23 0 001.634 2.17l.116-.326a.716.716 0 01-.303-.56zM52.591 17.507l1.027-.84 3.476 2.566 4.807-3.896-.35-.56-2.567 2.006-2.8-1.913v-1.003l5.04-3.127v-.117l-2.356-3.57-5.577 2.894v6.16l-1.12.886.42.514zm3.593-4.434v-3.99l.444-.256 1.913 2.753-2.357 1.493z" />
      <path d="M69.404 7.03l-2.45 2.03 1.027.933v7.117l-.42.257-1.867-1.214.023-4.666c0-2.217-.233-2.847-1.68-3.757-.49-.303-1.143-.747-1.143-1.493 0-.63.49-1.05 1.027-1.19l-.117-.467c-1.773.163-3.103 1.447-3.103 2.753 0 1.05.77 1.61 1.33 2.17.537.56.77 1.027.77 2.17v4.97l-1.05.84.397.514.723-.584 2.683 1.937 2.94-1.633 2.24 1.633 5.413-2.87.024-7.35 1.376-1.12-.42-.513-1.003.816-1.47-1.283-2.45 2.03 1.05.933v7.07l-.513.304-1.844-1.214V9.807l.864-.7-2.357-2.077zM93.736 23.573c0 .514-.373.84-.793.934l.117.443c.303-.07.583-.14.863-.28.91-.397 1.89-1.213 1.89-2.52 0-1.657-1.54-2.497-3.337-2.497-3.056 0-5.273 1.12-6.79 1.12-.91 0-1.773-.466-1.773-1.4 0-1.166 1.26-1.586 2.38-1.586 2.31 0 4.55 1.003 6.416 1.003 2.474 0 2.94-1.657 2.94-3.22l-.023-11.317 1.19-.98-.42-.49-.863.7-2.357-2.03-3.173 2.567V1.663h-.677V17.67c-.466-.093-.98-.233-1.516-.373V4.673c0-1.936-.98-3.126-2.684-3.126-1.797 0-2.94 1.4-3.01 2.916h.56c0-.723.35-1.12.98-1.12.817 0 .887 1.027.887 1.377v4.107h-.187c-1.563 0-2.8 1.166-2.8 2.613a2.21 2.21 0 001.633 2.17l.117-.327a.647.647 0 01-.303-.536c0-.607.537-.77 1.143-.77h.397v5.413c-1.4.56-2.264 1.797-2.264 3.15 0 1.54 1.19 3.057 3.524 3.057 2.123 0 5.063-1.004 6.627-1.004.676 0 1.306.327 1.306.98zm-3.733-5.833v-5.483c.7-.514 1.703-.49 2.38.07v2.053c0 2.613-.957 3.36-2.357 3.36h-.023zm0-12.903l1.12-.887 1.26 1.073v3.734c-.677.56-1.68.583-2.38.07v-3.99zm0 4.666a1.995 1.995 0 002.38-.07v2.217a2.035 2.035 0 00-2.38-.07V9.503z" />
      <path d="M100.145 15.43V8.733l2.683 1.774v6.72l-2.683-1.797zm-3.803 2.007l.98-.794 3.266 2.38 5.157-3.15v-6.37l-3.36-2.566-5.25 3.01v6.02l-1.19.956.397.514z" />
      <path d="M112.658 16.083l-1.26.864-.933-.724V9.34c.77.723 1.586.957 2.1.957.7 0 2.053-.374 2.31-3.267h-.7c-.187.327-.56.583-1.05.583-.42 0-.817-.233-1.05-.583h-.234l-1.633 1.867-1.703-1.844-3.127 2.124.327.443.886-.56.794 1.003v6.16l-1.47 1.004.35.443.77-.56 2.566 2.007 3.5-2.52-.443-.514z" />
      <path d="M115.134 5.373V15.99l-1.563 1.003.327.467.886-.56 2.474 2.123 2.893-2.03-.327-.443-.676.56-.887-.887V1.127h-.443l-3.804 2.683v.327c.584.186 1.12.443 1.12 1.236zm7.864 5.134c1.89 0 2.636-1.68 2.87-3.337h-.444c-.28.467-.816.887-1.516.887-.7 0-1.237-.42-1.517-.887h-.21l-3.477 5.367 4.597 6.696 3.57-2.333-.443-.56-1.004.653-4.596-6.813.233-.443c.467.443 1.097.77 1.937.77z" />
      <path d="M125.834 17.507l1.027-.84 3.476 2.566 4.807-3.896-.35-.56-2.567 2.006-2.8-1.913v-1.003l5.04-3.127v-.117l-2.356-3.57-5.577 2.894v6.16l-1.12.886.42.514zm3.593-4.434v-3.99l.444-.256 1.913 2.753-2.357 1.493zM142.222 5.467c0-.794.747-1.214 1.54-1.214 1.097 0 5.157 1.307 7.35 1.587v2.87l-1.517 1.54 1.517 1.54v3.967a5.731 5.731 0 01-2.59.606 5.254 5.254 0 01-3.71-1.493l4.13-1.727V6.05l-5.133 2.193c.723-1.586 1.936-2.496 2.356-2.753l-.233-.35c-3.453.583-5.507 3.64-5.507 6.51 0 4.317 3.664 7.28 7.467 7.28 3.78 0 6.767-2.847 6.767-6.393v-.234h-.444c-.466 1.167-1.306 2.31-2.45 3.08v-3.57l1.564-1.563-1.564-1.563v-2.8h.024c1.703 0 3.173-.91 3.173-2.59 0-1.704-1.703-2.894-3.897-2.73v.443c.724.093 1.797.21 1.797 1.027 0 .513-.49.746-.98.746-2.147 0-5.227-1.656-7.21-1.656-2.263 0-3.687 1.446-3.687 3.126a2.62 2.62 0 001.587 2.45l.233-.326a.969.969 0 01-.583-.91zm1.26 3.57l2.45-1.027v5.717l-1.54.653c-.747-.957-1.167-2.193-1.167-3.477 0-.676.094-1.306.257-1.866z" />
      <path d="M160.644 16.34l-1.003.653-.793-.77V9.177l-1.774-2.124-3.15 2.124.35.443.887-.56.793 1.003v6.16l-1.47 1.004.35.443.77-.56 2.24 2.007 3.36-2.334-.56-.443zm-5.436-12.437l1.983 2.264 2.217-1.96-1.984-2.264-2.216 1.96z" />
      <path d="M171.27 17.273l-1.213-1.073V9.97l1.236-.747 1.61 1.47v5.74l-.98.91 2.31 2.007 3.454-2.24v-.863l-1.004.746-1.096-1.096V10.04l1.166-.957-.42-.49-.77.607-2.426-2.077-3.197 1.984-2.333-1.984-3.057 1.914-1.703-1.914-3.244 2.217.327.467.887-.56.91 1.003v6.183l-.91.794 2.683 2.123 2.24-2.007-1.003-.91V9.83l1.026-.607 1.61 1.47v5.74l-.98.91 2.31 2.007 2.567-2.077z" />
      <path d="M176.857 17.507l1.027-.84 3.477 2.566 4.806-3.896-.35-.56-2.566 2.006-2.8-1.913v-1.003l5.04-3.127v-.117l-2.357-3.57-5.577 2.894v6.16l-1.12.886.42.514zm3.594-4.434v-3.99l.443-.256 1.913 2.753-2.356 1.493z" />
      <path d="M186.974 20.237l.233-.63a.62.62 0 01-.326-.56c0-.584.536-.887 1.096-.887.817 0 1.4.537 1.727 1.073l4.597-2.8V12.91l-2.007-1.47c1.307-1.213 1.843-2.543 2.03-4.34h-.653v.023V7.1c-.07.56-.56.98-1.167.98-.793 0-1.377-.513-1.703-1.027l-4.83 2.8v3.267l1.773 1.4c-1.843 1.703-2.217 2.567-2.217 3.523 0 1.097.654 1.867 1.447 2.194zm3.033-6.837l1.284 1.05v3.033c-.42-.956-1.377-1.796-2.73-1.796-.607 0-1.19.21-1.634.56.584-.724 1.4-1.4 2.24-2.124l.84-.723zm-.07-.793l-.956-1.004V8.57c.466 1.19 1.493 1.727 2.52 1.727a2.92 2.92 0 001.166-.257 5.608 5.608 0 01-1.003 1.073l-1.727 1.494z" />
    </motion.svg>
  );
}